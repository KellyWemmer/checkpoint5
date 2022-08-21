import { AppState } from "../AppState";
import { Post } from "../models/Post";
import { logger } from"../utils/Logger";
import { bcwSandboxServer } from"./AxiosService";

class PostsService {
    
    async getPosts() {
        const res = await bcwSandboxServer.get('api/posts')
        logger.log('logging posts from services', res.data)
        AppState.posts = res.data.posts  
        AppState.newer = res.data.newer
        AppState.older = res.data.older
        logger.log('newer', AppState.newer)
        logger.log('older', AppState.older)
    }

    async getPostsByCreatorId(creatorId) {
        const res = await bcwSandboxServer.get('api/posts', {
            params: {
                creatorId
            }
        })
        logger.log('Logging posts for profiles from service', res.data.posts) //successful
        AppState.profilePosts =  res.data.posts
        AppState.newer = res.data.newer
        AppState.older = res.data.older
        logger.log('newer', AppState.newer)
        logger.log('older', AppState.older)
    }

    async getPostsBySearch(searchTerm) {
        const res = await bcwSandboxServer.get('api/posts', {
            params: {
                query: searchTerm
            }
        })
        logger.log('Logging posts by search', res.data.posts)
        AppState.posts = res.data.posts
        AppState.newer = res.data.newer
        AppState.older = res.data.older

    }

    async changePage(url) {
        const res = await bcwSandboxServer.get(url)
        AppState.posts = res.data.posts  
        AppState.newer = res.data.newer
        AppState.older = res.data.older
        logger.log('newer', AppState.newer)
        logger.log('older', AppState.older)
    }
    async changePageProfilePost(url) {
        const res = await bcwSandboxServer.get(url)
        AppState.profilePosts = res.data.posts  
        AppState.newer = res.data.newer
        AppState.older = res.data.older
        logger.log('newer', AppState.newer)
        logger.log('older', AppState.older)
    }

    async createPost(postData) {
        const res = await bcwSandboxServer.post('/api/posts', postData)
        AppState.posts.unshift(new Post(res.data))
        logger.log("creating post", res.data)
    }
}

export const postsService = new PostsService()
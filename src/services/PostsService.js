import { AppState } from "../AppState";
import { logger } from"../utils/Logger";
import { bcwSandboxServer } from"./AxiosService";

class PostsService {
    
    async getPosts() {
        const res = await bcwSandboxServer.get('api/posts')
        logger.log('logging posts from services', res.data)
        AppState.posts = res.data.posts       
    }

    async getPostsByCreatorId(creatorId) {
        const res = await bcwSandboxServer.get('api/posts', {
            params: {
                creatorId
            }
        })
        logger.log('Logging posts for profiles from service', res.data) //successful
        AppState.profilePosts =  res.data.profilePosts
    }
}

export const postsService = new PostsService()
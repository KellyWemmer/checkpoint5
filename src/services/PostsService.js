import { AppState } from "../AppState";
import { Post } from "../models/Post";
import { logger } from"../utils/Logger";
import { bcwSandboxServer } from"./AxiosService";

class PostsService {
    
    async getPosts() {
        const res = await bcwSandboxServer.get('api/posts')
        logger.log('here is the post get res', res.data)
        AppState.posts = res.data.posts
       
    }
}

export const postsService = new PostsService()
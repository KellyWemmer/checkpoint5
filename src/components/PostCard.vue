<template>
    <div class="post-card card m-2">
        <div class="card-body ">            
            {{new Date(post.createdAt).toLocaleDateString('en-US')}}
            
            <p>{{post.body}}</p>
            <img :src="post.imgUrl" class="img-fluid" alt="">
            
            <div v-if="user.isAuthenticated == true">
                <button @click="toggleLike">Like</button>
            </div>
            <div>
                <p>💙{{post.likeIds.length}}</p>
            </div>
            
            <!-- create router link -->
            <div class="post-creator">
                <router-link :to="{name: 'Profile', params: {id: post.creator.id}}">
                    <img :src="post.creator.picture" alt="">
                </router-link>
                <h6>{{post.creator.name}}</h6>
                <div v-if="user.isAuthenticated == true && post.creator.id == account.id">
                    <button class="btn btn-danger" @click="deletePost(post)">Delete</button>                
                </div>
            </div>            
        </div>

    </div>
</template>
<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState';
import { Post } from '../models/Post';
import { postsService } from '../services/PostsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';


export default {
    props: {
        post: {type: Post, required: true}
    },
    setup(props) {
        return {
            user: computed(() => AppState.user), 
            account: computed(() => AppState.account),
            async deletePost(post) {
                try {
                    const yes = await Pop.confirm('Are you sure you want to delete this post?')
                    if(!yes) {return}
                    await postsService.deletePost(post.id)
                } catch (error) {
                    logger.error('[Deleting Post]', error)
                    Pop.error(error)
                    
                }
            },
            async toggleLike() {
                let currentId = this.account.id
                let currentPost = props.post
                if (props.post.likeIds.includes(currentId)) {
                    logger.log('ID is included')
                    currentPost.likeIds = currentPost.likeIds.filter(p => p != currentId)
                } else {
                    logger.log("ID is not included")
                    currentPost.likeIds.push(currentId)
                }
                await postsService.toggleLike(currentPost.id, currentPost) 
            }
        };
    },
};
</script>
<style lang="scss" scoped>
.project-card {
  min-height: 300px;
  background-image: v-bind(cover) !important;
  background-size: cover;
  background-position: center;
  margin-bottom: 3rem;
  position: relative;
}
.post-creator {
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  img {   
    border-radius: 50px;
    height: 45px;
    width: 45px;
    object-fit: cover;
    object-position: center;
   
  }
}
</style>
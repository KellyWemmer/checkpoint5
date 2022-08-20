<template>
    <div class="post-card card m-2">
        <div class="card-body ">
            <p>{{post.body}}</p>
            <img :src="post.imgUrl" class="img-fluid" alt="">
            <p>{{post.likeIds}}</p>
            
            <!-- create router link -->
            <div class="post-creator">
                <router-link :to="{name: 'Profile', params: {id: post.creator.id}}">
                    <img :src="post.creator.picture" alt="">
                </router-link>
            </div>            
        </div>

    </div>
</template>
<script>
import { Post } from '../models/Post';


export default {
    props: {
        post: {type: Post, required: true}
    },
    setup() {
        return {};
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
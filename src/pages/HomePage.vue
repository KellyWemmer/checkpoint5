<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10" v-for="p in posts" :key="p.id">
        <PostCard :post="p"/>
      </div>
    </div>
  </div>
</template>
<script>


import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState';
import {postsService} from '../services/PostsService.js'
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
    setup() {

      async function getPosts() {
        try {
          await postsService.getPosts();
        } catch (error) {
          logger.error("Getting Posts", error)
          Pop.error(error)
          
        }
      }

      onMounted(() => {
        getPosts()
      })
        return {
          posts: computed(() => AppState.posts)
        };
    },
    
};
</script>
<style>
</style>
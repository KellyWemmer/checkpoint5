<template>
  
  <div class="container">
    <div class="row d-flex">
      <div class="col-12 col-md-8">
        <PostForm />
      </div>
      <div class="col-12 col-md-8 rounded" v-for="p in posts" :key="p.id">
        <PostCard :post="p"/>        
      </div>     
      <div class="col-2 align-items-center">
          <AdsCard />
      </div>      
    </div>



    <div class="row mb-5 pb-5">
      <div class="col-6 text-end p-3">
        <button
          @click="changePage(older)"
          class="btn btn-secondary w-50"
          :disabled="!older"
        >Older
        </button>          
      </div>

      <div class="col-6 p-3">
        <button
          @click="changePage(newer)"
          class="btn btn-secondary w-50"
          :disabled="!newer"
        >Newer
        </button>
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
import PostForm from '../components/PostForm.vue';

export default {
    setup() {
        async function getPosts() {
            try {
                await postsService.getPosts();
            }
            catch (error) {
                logger.error("[Getting Posts]", error);
                Pop.error(error);
            }
        }
        onMounted(() => {
            getPosts();
        });
        return {
            posts: computed(() => AppState.posts),
            newer: computed(() => AppState.newer),
            older: computed(() => AppState.older),
            async changePage(url) {
                try {
                    await postsService.changePage(url);
                }
                catch (error) {
                }
            }
        };
    },
    components: { PostForm }
};
</script>
<style>
</style>
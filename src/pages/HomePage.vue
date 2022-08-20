<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-9" v-for="p in posts" :key="p.id">
        <PostCard :post="p"/>
      </div>
    </div>    
    

    <div class="row mb-5 pb-5">
        <div class="col-6 text-end">
          <button
            @click="changePage(older)"
            class="btn btn-outline-light w-50"
            :disabled="!older"
          >Older
          </button>
          
        </div>

        <div class="col-6">
          <button
            @click="changePage(newer)"
            class="btn btn-outline-light w-50"
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

export default {
    setup() {

      async function getPosts() {
        try {
          await postsService.getPosts();
        } catch (error) {
          logger.error("[Getting Posts]", error)
          Pop.error(error)
          
        }
      }      

      onMounted(() => {
        getPosts()               
      });

        return {
          posts: computed(() => AppState.posts),
         
          newer: computed(() => AppState.newer),
          older: computed(() => AppState.older),
          async changePage(url) {
            try {
              await postsService.changePage(url)
            } catch (error) {   
            }
          }
        };
    },

    
   
    
};
</script>
<style>
</style>
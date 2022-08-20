<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-9" v-for="p in posts" :key="p.id">
        <PostCard :post="p"/>
      </div>
    </div>    
    <div class="col-12 col-md-1" v-for="a in ads" >
      <AdCard :ad="a"/>
    </div>
  </div>
</template>
<script>


import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState';
import {postsService} from '../services/PostsService.js'
import {adsService} from '../services/AdsService.js'
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

      async function getAds() {
        try {
          await adsService.getAds();
        } catch (error) {
          logger.error("[Getting Ads]", error)
          Pop.error(error)
        }
      }

      onMounted(() => {
        getPosts()
        getAds()
        logger.log("test1")
      })
        return {
          posts: computed(() => AppState.posts),
          ads: computed(() => AppState.ads)
        };
    },
    
};
</script>
<style>
</style>
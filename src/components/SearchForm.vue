<template>
    <div class="search-form">
    <form @submit.prevent="searchPosts">
      <div class="input-group">
        <input class="form-control" type="text" required v-model="query" placeholder="search term"/>
        <button class="btn btn-outline-success bg-dark" type="submit">
          <i class="mdi mdi-magnify"></i>
        </button>
      </div>
    </form>
  </div>
</template>
<script>

import { ref } from '@vue/reactivity'
import { postsService } from '../services/PostsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';


export default {
    setup() {
        const query = ref('')

        return {
            query,
            async searchPosts() {
                try {
                    await postsService.getPostsBySearch(query.value)
                    query.value = ''
                } catch (error) {
                    logger.error('[Searching Posts]', error)
                    Pop.error(error)
                }
            }
        };
    },
};
</script>
<style>
</style>
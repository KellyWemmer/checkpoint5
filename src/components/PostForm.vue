<template>
  <div v-if="user.isAuthenticated == true ">
    
    <h3 class="text-primary pt-3">Make a Post</h3>      
    <form @submit.prevent="handleSubmit()" class="post-form col-12">

        <div class="col-4 mb-2">
          <label class="form-label" for="body">Body</label>
          <input class="form-control" type="text" minlength="3" id="body" name="body" v-model="editable.body">
        </div>

        <div class="col-4 mb-2">
          <label class="form-label" for="imgUrl">Image Url</label>
          <input class="form-control" type="text" id="imgUrl" name="imgUrl" v-model="editable.imgUrl">          
        </div>  

          <button type="submit" class="btn btn-primary p-2 mt-3 mb-4 text-light d-flex justify-content-center">Submit</button>       
    </form>
    
    
  </div>  
</template>

<script>

import { postsService } from '../services/PostsService';

import { AppState } from '../AppState';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { ref, watchEffect } from 'vue';
import { computed } from '@vue/reactivity';


export default {
    setup() { 
        
        const editable = ref({})

        watchEffect(() => {
        //               v ... is used to break reference
          if (!AppState.activePost) { return } // stop
          editable.value = { ...AppState.activePost }
      })

        return { 
          user: computed(() => AppState.user),
          editable,
          async handleSubmit() {
              try {
                  if (editable.value.id) {
                      await postsService.editPost(editable.value)
                  } else{
                      postsService.createPost(editable.value)
                  }
                  editable.value = {}
              } catch (error) {
                  logger.error('[Creating or Editing Post]', error)
                  Pop.error
                  
              }
          }
        };
    },
};
</script>
<style>
</style>
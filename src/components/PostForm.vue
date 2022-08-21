<template>
  <form @submit.prevent="handleSubmit()" class="post-form">
    <h3 class="text-primary">Make a Post</h3>
    <div class="row">

      <div class="col-4">
        <label class="form-label" for="body">Body</label>
        <input class="form-control" type="text" minlength="3" id="body" name="body" v-model="editable.body">
      </div>

      <div class="col-4">
        <label class="form-label" for="imgUrl">Image Url</label>
        <input class="form-control" type="text" id="imgUrl" name="imgUrl" v-model="editable.imgUrl">
      </div>
        <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
    </div>
  </form>
</template>

<script>

import { postsService } from '../services/PostsService';

import { AppState } from '../AppState';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { ref, watchEffect } from 'vue';


export default {
    setup() { 
        
        const editable = ref({})

        watchEffect(() => {
      //               v ... is used to break reference
      if (!AppState.activePost) { return } // stop
      editable.value = { ...AppState.activePost }
    })

        return {            
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

<template>
    <div class="profile-page" v-if="profile">

        <div class="cover-img img-fluid" >
            <div class="position-absolute" style="right:0">               
            </div>
            <div>
                <img :src="profile.picture" alt="" height="120" >  
            </div>
              
            <div>
                <div> 
                    <h3>{{profile.name}}</h3>
                    <p>Bio: {{profile.bio}}</p> 
                    <p>Class: {{profile.class}}</p>
                    <div class="graduated" v-if="profile.graduated">
                        <p>Status: Graduated</p>
                    </div>
                    <div class="graduated" v-if="!profile.graduated">
                        <p>Status: Current Student</p>
                    </div>
                    <div class="d-flex align-items-end">
                        <a :href="profile.linkedin" v-if="profile.linkedin" style="font-size: 25px"><span class="mdi mdi-linkedin"></span></a>
                        <a :href="profile.resume" v-if="profile.resume" style="font-size: 25px"><span class="mdi mdi-file-document-outline"></span></a>
                        <a :href="profile.github" v-if="profile.github"><span class="mdi mdi-github" style="font-size: 25px"></span></a>
                    </div>            
                </div>
            </div> 
        </div>
    </div>

    <div class="container">
        <div class="row d-flex">
       
            <div class="col-12 col-md-8 rounded" v-for="p in posts" :key="p.id">
                <PostCard :post="p"/>        
            </div>     
            <div class="col-3 align-items-center">
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
import { router } from '../router';
import { profilesService } from '../services/ProfilesService.js';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
import { postsService } from '../services/PostsService';

export default {

    setup() {
        const route = useRoute()
        async function getProfileById() {
            try {
                await profilesService.getProfileById(route.params.id)
            } catch (error) {
                logger.error(['Getting Profile', error])
                Pop.error(error)
                router.push({ name: 'Home'})
            }
        }

        async function getPostsByCreatorId() {
            try {
                await postsService.getPostsByCreatorId(route.params.id)
            } catch (error) {
                logger.error('[Getting Profile Posts]', error)
                Pop.error(error)
            }
        }

        onMounted(() => {
            getProfileById()
            getPostsByCreatorId()            
        })

        return {
            profile: computed(() => AppState.activeProfile),
            cover: computed(() => `url(${AppState.activeProfile?.coverImg || 'https://cdn.pixabay.com/photo/2017/07/16/17/33/background-2509983_1280.jpg'})`),
            posts: computed(() => AppState.posts),
            newer: computed(() => AppState.newer),
            older: computed(() => AppState.older),
            async changePage(url) {
                try {
                await postsService.changePageProfilePost(url)
                } catch (error) {   
                }
            }
        };                
    },
};
</script>

<style>

.cover-img {
    height: 300px;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  display: grid;
  place-content: center;
  color: aliceblue;
  background-image: v-bind(cover);
}
</style>
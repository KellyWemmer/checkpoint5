<template>
    <div v-for="a in ads" class="ad-row row p-3" >
        <AdCard :ad="a"/>
    </div>    
</template>
<script>

import { computed, onMounted } from 'vue';
import {adsService} from '../services/AdsService.js';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger';
export default {
    setup() {
        async function getAds() {
            try {
                await adsService.getAds();
            } catch (error) {
                logger.error("[Getting Ads]", error)
                Pop.error(error)
            }
        }
        onMounted(() => {        
            getAds()        
        });
        return {
            ads: computed(() => AppState.ads)
        };
    },
};
</script>
<style>
</style>
<template>
<div class="ad-card p-2">
    <div class="card-body">
        <div class="ad-image">
            <img :src="ad.square" alt="">
            
        </div>
    </div>
</div>
</template>
<script>

export default {
    props: {
        ad: {type: String, required: true}
    },
    setup() {
        return {};
        },
    };
</script>
<style>
</style>
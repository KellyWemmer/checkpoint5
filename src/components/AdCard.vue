<template>

<div class="card-body">
    <div class="ad-image">
        <img :src="ad.square" alt="" >
        
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
.ad-image img {
    max-width: 200px;
    max-height: 200px;
}
</style>
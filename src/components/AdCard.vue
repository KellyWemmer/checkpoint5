<template>

<div class="card">
    <div class="ad-image img-fluid">
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
    max-width: 300px;
    max-height: 300px;
}


</style>
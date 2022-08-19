<template>
    <div class="post-card card">
        <div class="card-body">
            <p>{{post.body}}</p>
        </div>

    </div>
</template>
<script>


export default {
    props: {
        post: {type: Object, required: true}
    },
    setup() {
        return {};
        },
    };
</script>
<style>
</style>
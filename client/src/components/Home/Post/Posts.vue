<template>
    <div class="ui grid">
            <transition-group name="post" tag="div" class="three column row">
                <div class="column" :key="post.id" v-for="post in posts">
                    <default-post :post="post"></default-post>
                </div>
            </transition-group>
    </div>
</template>

<script>
import DefaultPost from './DefaultPost'
export default {
    components: {
        DefaultPost
    },
    data() {
        return {
            posts: []
        }
    },
    created(){
        this.posts = this.$store.getters.getPosts
    },
    watch:{
        '$store.state.posts': function(el) {
            this.posts = el
        }
    }
}
</script>

<style lang="sass" scoped>
    .post-enter
        
    .post-enter-active
        animation: slide-in 1s ease-out forwards
    
    .post-leave

    .post-leave-active

    .post-move
        transition: 1s

    @keyframes slide-in
        from
            transform: translateX(800px)
            opacity: 1
        to
            transform: translateX(0)
            opacity: 1

</style>

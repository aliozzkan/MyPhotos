<template>
    <div class="ui grid" id="root">
        <div class="column eleven wide row">
            <posts/>
        </div>
        <div class="column one wide"></div>
        <div class="column four wide ">
            <create-post></create-post>
        </div>
    </div>
</template>

<script>
import Posts from './Post/Posts'
import CreatePost from './Post/CreatePost'

export default {
    components : {
        Posts,
        CreatePost
    } 
}
</script>

<style lang="sass" scoped>
    #root
        margin-top: 4rem

</style>

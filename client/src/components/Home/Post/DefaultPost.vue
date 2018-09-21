<template>
    <div class="ui card">
        <div class="content">
            <div class="right floated meta">{{post.date}}</div>
            <img class="ui avatar image" :src="post.user.avatar"> {{post.user.username}}
            
        </div>
        <div class="image">
            <img :src="post.img">
        </div>
        <div class="ui loader"></div>
        <div class="content">
            <span class="right floated">
            <i class="heart outline like icon"></i>
            {{post.likes}} Likes
            </span>
            <i class="comment icon"></i>
            {{post.comments}} Comments
            
        </div>
        <div class="extra content">
            <div class="ui large transparent left icon input">
            <i class="heart outline icon"></i>
            <input type="text" placeholder="Add Comment...">
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['post'],
    data() {
        return {
            date: '14h',
            avatar: 'https://semantic-ui.com/images/avatar/large/elliot.jpg',
            img: 'https://semantic-ui.com/images/wireframe/image.png',
            likes: 17,
            comments: 1,
        }
    },
    
}
</script>

<style lang="sass" scoped>
    .card
        width: 100% !important
        margin-bottom: 1rem !important
</style>

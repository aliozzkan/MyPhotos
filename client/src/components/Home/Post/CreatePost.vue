<template>
    <div id="root">
        <div class="ui card">
            <div class="user">
                <img class="ui avatar image" :src="post.user.avatar">
                <span>{{post.user.username}}</span>
            </div>
            <div class="ui divider"></div>
            <div class="image">
                <img @click="$refs.file.click()" :src="post.img" alt="">
            </div>
            <div class="share">
                <input ref="file" type="file" @change="onChange($event)" style="display:none">
                <button class="ui blue button fluid" @click="addPost"><i class="share icon"></i> Share</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        alert() {
            alert("tiklandi!")
        },
        onChange(e){
            const file = e.target.files[0]
            this.post.img = URL.createObjectURL(file)
            this.$refs.file.value = null
        },
        addPost(){
            if(this.post.img == 'https://cdn.dribbble.com/users/91147/screenshots/1741674/test_icons.png') {
               alertify.notify('Select A Image', 'error', 3)
            } else {
                this.$store.dispatch('setPost', this.post)
                this.post = {
                    img: 'https://cdn.dribbble.com/users/91147/screenshots/1741674/test_icons.png',
                    id: Math.ceil(Math.random()*100),
                    date: '1dk',
                    comments:  0,
                    likes: 0,
                    user : {
                        username: 'Lisa',
                        avatar: 'https://semantic-ui.com/images/avatar/large/jenny.jpg'
                    }
                }
            }
        }
    },
    data() {
        return {
            post: {
                id: Math.ceil(Math.random()*100),
                img: 'https://cdn.dribbble.com/users/91147/screenshots/1741674/test_icons.png',
                date: '1dk',
                likes: 0,
                comments: 0,
                user : {
                    username: 'Lisa',
                    avatar: 'https://semantic-ui.com/images/avatar/large/jenny.jpg'
                }

            }
        }
    },
    watch : {
        post : function(el){

        }
    }
}
</script>


<style lang="sass" scoped>
    #root
        margin: 0 !important
        width: 100% !important
        height: 200px
        padding: .3em 1em
    
    .user
        width: 100%
        margin-top: 1rem 

    .card
        padding: .3em 1em
        margin: 0 !important
        padding-bottom: 1.4em

    .button 
        margin-top: 1rem

    
        
        
</style>

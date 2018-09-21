<template>
    <div class="ui pointing blue menu fixed">
        <div class="ui container">
            <div class="left menu">
                <a class="item">
                    <img src="https://cdn.dribbble.com/users/91147/screenshots/1741674/test_icons.png" height="25" alt="">
                    <strong>MyPhotos</strong>
                </a>
                <router-link class="item" tag="a" to="/" active-class="active" exact>Home</router-link>
                <router-link class="item" tag="a" to="trends" active-class="active" exact>Trends</router-link>
                
            </div>
            <div class="ui secondary menu">
                <div class="ui search item">
                <div class="ui icon input">
                    <input class="prompt" v-model="searchKey" @focusout="isSearched=false" type="text" placeholder="Search username...">
                    <i class="search icon"></i>
                </div>
                <div class="results transition" :class="{'found' : isSearched}">
                    <a v-if="!notFound" :key="index" v-for="(item,index) in result" href="#" class="result">
                        <img :src="item.img" class="ui searchimg" alt="">
                        <span class="searchusername">{{item.username}}</span>
                    </a>
                    <div v-if="notFound" class="message empty">
                        <i class="icon close"></i> Not Found User!
                    </div>
                </div>
                </div>

            </div>
            <div class="right menu">
                <div class="menu ui secondary">
                    <a class="item" v-if="!isLogged">Login</a>
                    <a class="item" v-if="!isLogged">Register</a>
                     <div class="ui pointing simple dropdown item">
                        <span class="text">
                            <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg"> 
                            Username
                        </span>
                        <div @click="userDrop=false" class="menu drop">
                            <a class="item">Profile</a>
                            <a class="item">Notifications </a>
                            <a class="item">Friends</a>
                            <div class="divider"></div>
                            <a class="item">Settings</a>
                            <a class="item">Security</a>
                            <a class="item" v-if="isLogged">Logout <i class="icon sign-out"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchData: [],
            searchKey: '',
            result: null,
            isSearched: false,
            matchData:[],
            notFound: false,
            isLogged: true
        }
    },
    watch : {
        searchKey : function(val) {
            if(val.length > 0) {
                this.isSearched = true
                const results = this.searchData.filter(user => {
                    if(user.username.toLowerCase().search(this.searchKey.toLowerCase()) > -1) {
                        return user
                    }  
                })
                if(results.length < 1) {
                    this.result = null
                } else {
                    this.result = results
                }

            } else {
                this.isSearched = false
            }
        },
        result : function(val) {
            if(val){
                this.notFound = false
            } else {
                this.notFound = true
            }
        }
    },
    created() {
        this.searchData = this.$store.getters.getSearchDatas
    }
    
}
</script>

<style lang="sass" scoped>
    .found
        display: block !important
    
    .searchimg
        height: 30px
        width: auto
        position: absolute
        border-radius: 2px

    .searchusername
        margin-left: 40px
        line-height: 30px

    .drop
        transform: translateY(-9px)
        .item
            text-indent: 8px

            
    
</style>

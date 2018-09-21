import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [
            {
                id: 1,
                date: '14h',
                img: 'https://images.pexels.com/photos/1030320/pexels-photo-1030320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                likes: 17,
                comment: 1,
                user: {
                    username: 'Elliot',
                    avatar: 'https://semantic-ui.com/images/avatar/large/elliot.jpg',
                }
            },
            {
                id: 2,
                date: '14h',
                img: 'https://images.pexels.com/photos/65665/smile-mouth-teeth-laugh-65665.jpeg?auto=compress&cs=tinysrgb&h=350',
                likes: 17,
                comment: 1,
                user: {
                    username: 'Molly',
                    avatar: 'https://semantic-ui.com/images/avatar2/large/molly.png',
                }
            },
            {
                id: 3,
                date: '14h',
                img: 'https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&h=350',
                likes: 17,
                comment: 1,
                user: {
                    username: 'Steve Jobes',
                    avatar: 'https://semantic-ui.com/images/avatar/large/steve.jpg',
                }
            },
            {
                id: 4,
                date: '14h',
                img: 'https://images.pexels.com/photos/3797/black-and-white-sport-fight-boxer.jpg?auto=compress&cs=tinysrgb&h=350',
                likes: 17,
                comment: 1,
                user: {
                    username: 'Matt',
                    avatar: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
                }
            },
            {
                id: 5,
                date: '14h',
                img: 'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&h=350',
                likes: 17,
                comment: 1,
                user: {
                    username: 'Kristy',
                    avatar: 'https://semantic-ui.com/images/avatar2/large/kristy.png',
                }
            }
            
        ],
        searchData : [
            {username: 'Elliot', img: 'https://semantic-ui.com/images/avatar/large/elliot.jpg'}, 
            {username: 'Molly', img: 'https://semantic-ui.com/images/avatar2/large/molly.png'}, 
            {username: 'Steve Jobs', img: 'https://semantic-ui.com/images/avatar/large/steve.jpg'},
            {username: 'Kristy', img: 'https://semantic-ui.com/images/avatar2/large/matthew.png'},
            {username: 'Matt', img: 'https://semantic-ui.com/images/avatar2/large/kristy.png'},
            {username: 'Lisa', img: 'https://semantic-ui.com/images/avatar/large/jenny.jpg'},
        ]
    },
    getters: {
        getPosts(state) {
            return state.posts
        },
        getSearchDatas(state) {
            return state.searchData
        }
    },
    mutations: {
        setPost(state, payload) {
            state.posts.unshift(payload)
        }
    },
    actions: {
        setPost({ commit }, payload) {
            commit('setPost', payload)
        }
    }
})
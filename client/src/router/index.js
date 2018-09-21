import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Trend from '@/components/Trends'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/trends',
      name: 'Trend',
      component: Trend
    }
  ]
})

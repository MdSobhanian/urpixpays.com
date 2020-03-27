import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/Container/Index'
import HelloWorld from '@/components/HelloWorld'
import GuestHome from '@/Pages/Guest/Home'
import InfoPage from '@/Pages/Guest/InfoPage'
import BestImage from '@/Pages/Guest/BestImage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      children:[
        {
          path: '/landing',
          name: 'GuestHome',
          component: GuestHome
        },
        {
          path: '/info-page',
          name: 'InfoPage',
          component: InfoPage
        },
        {
          path: '/best_images',
          name: 'BestImage',
          component: BestImage
        }
      ]
    },

  ]
})

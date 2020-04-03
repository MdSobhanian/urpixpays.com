import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/Container/Index'
import HelloWorld from '@/components/HelloWorld'
import GuestHome from '@/Pages/Guest/Home'
import InfoPage from '@/Pages/Guest/InfoPage'
import BestImage from '@/Pages/Guest/BestImage'
import Gallery from '@/Pages/Guest/Gallery'
import Dashboard from '@/Pages/Dashboard'
import Home from '@/Pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      redirect:'/landing',
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
        },
        {
          path: '/gallery',
          name: 'Gallery',
          component: Gallery
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        }
      ]
    },

  ]
})

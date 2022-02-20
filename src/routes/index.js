import { createRouter, createWebHashHistory } from "vue-router";
import Home from './Home'
import Movie  from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  //hash / history
  //https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior(){
    return { top:0 }
  },
  
  //page들을 구분
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    }
  ]
})
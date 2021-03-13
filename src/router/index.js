import Router from "vue-router";
import ToDo from '../components/ToDo'
import About from '../components/About'

export default new Router({
    routes: [
      {
        path: '/',
        component: ToDo
      },
      {
        path: '/about',
        component: About
      }
    ]
      })
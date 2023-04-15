import { createRouter, createWebHistory } from 'vue-router'
import  SignUp from "../views/SignUp.vue"
import Login from "../views/Login.vue"
import  Courses from "../views/Courses.vue"
import store from "../store"
import Course from "../views/Course.vue"
const routes = [
  {
    path: '/',
    name: 'courses',
    component: Courses,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component:SignUp 
  },
  {
    path: '/login',
    name: 'login',
    component:Login 
  },
  ,{
    path:'/courses/:pk',
    name:"course",
    component:Course,
    meta:{
      requireAuth:true
    },
    props:true
    
  },{
    name:"bad url",
    path:'/:pathMatch(.*)*',
    meta:{
      not_found:true,
    }
  }
  
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.not_found){
    if(store.state.isAuthenticated){
      next({name:"courses"})

    }else{

      next({name:"login"})
    }
  }
  
  else if(to.meta.requireAuth &&!store.state.isAuthenticated){
    console.log("work")
   next({name:"login",query:{to:to.path}})
   
  }else{
    next()

  }


})


export default router

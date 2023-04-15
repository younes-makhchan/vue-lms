import { createStore } from 'vuex'

const course={
  namespaced: true,
    state: () => ({ 
    activeLesson:0,
    lessons:[],
    course:null,
    quizes:[]

  }),
  mutations: { 
    addCourse(state,course){
      state.course=course
      
    },
    addLessons(state,lessons){
      state.lessons=lessons
    },
    addQuizes(state,quizes){
      state.quizes=quizes
    }
   },
  actions: { 
    
   },
  getters: { 
    
   }
}

export default createStore({
  state: {
    isAuthenticated:false,
    token:null,
    
  },
  getters: {
  },
  mutations: {
    startApp(state){
      if(localStorage.getItem("token")){
        state.token=localStorage.getItem("token")
        state.isAuthenticated=true;
        
      }else{
        state.token=null
        state.isAuthenticated=false;
      }
    },
    setToken(state,token){
      state.token=token;
      state.isAuthenticated=true;
      
    },
    removeToken(state){

      state.token=null;
      state.isAuthenticated=false;

    }
  
  },
  actions: {
  },
  modules: {
    course
  }
})



<template>

  <navbar></navbar>
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar.vue';
import axios from "axios"
export default{
  components:{
    Navbar
  },
  beforeCreate(){
     this.$store.commit("startApp")
     const token=this.$store.state.token
     if(token){
      axios.defaults.headers.common["Authorization"]='JWT '+token;     
     }else{
      axios.defaults.headers.common["Authorization"]='';     

     }

  }
}
</script>

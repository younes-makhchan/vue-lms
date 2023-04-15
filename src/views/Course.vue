<template>
<course-container :lessons="lessons" :quizes="quizes"></course-container>
<course-sidebar :lessons="lessons" :quizes="quizes"></course-sidebar>
</template>

<script>
import CourseSidebar from "@/components/CourseSidebar.vue";
import CourseContainer from "@/components/CourseContainer.vue";
import axios from "axios";
import { mapState } from "vuex";

export default {
  components:{
    CourseSidebar,
    CourseContainer
  },
  props: {
    pk: String,
  },
  computed:{...mapState("course",["course","lessons","quizes","activeLesson"])},
  
  data() {
    return{
      
      
    }
  },
  methods: {
    async getCourseDetails() {
      try {
        const Courseresponse = await axios(`api/courses/${this.pk}`);
        
        this.$store.commit("course/addCourse",Courseresponse.data)
      } catch (error) {
        console.log(error.message);
      }
    },
    async getLessons(){
      try{

        const lessonsResponse = await axios(`api/courses/${this.pk}/lessons/`);
        this.$store.commit("course/addLessons",lessonsResponse.data)
        
      }catch(error){
          console.log(error)
      }
    },
    async getQuizes(){
      try{

        const quizzesResponse = await axios(`api/courses/${this.pk}/quizzes/`);
        this.$store.commit("course/addQuizes",quizzesResponse.data)
      }catch(error){
          console.log(error)
      }
    },

  
    
  },
  mounted() {
 
    this.getCourseDetails();
    this.getLessons()
    this.getQuizes();
  },
};
</script>setActiveLesson

<style>


a.title{
  cursor: pointer;
}


</style>
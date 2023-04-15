<template>
      <section class="py-6">
    <div class="container">
      <div class="row mb-6">
        <div class="col-md-12">
          <!-- Nav -->
          <ul class="nav nav-lb-tab mb-6" id="tab" role="tablist">
            <li class="nav-item ms-0" role="presentation">
              <p class=" active">Most Popular</p>
            </li>
          </ul>
          <div class="content">
              <div class="row">
                <CourseCard  v-for="course in courses" v-bind="course" :key="course.id" ></CourseCard>
              </div>
          </div>
        </div>
      </div>
      </div>
      </section>
      
</template>
<script>
import axios from "axios";
import CourseCard from "./CourseCard.vue";
export default{
    components:{
        CourseCard
    },
    data() {
    return {
        courses: []

    }
  },

  methods: {
    async getCourses() {
      try {
        const response = await axios.get("api/courses/");

        this.courses = response.data;
        
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  mounted(){
        this.getCourses();
    
  }
}
</script>
<style scoped>

.active{
    color:var(--geeks-primary)
}
</style>
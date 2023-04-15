<template>
  <!-- Tab content -->
  <main>
  <hero></hero>
  <course-list ></course-list>

      
   

  </main>
</template>
<script>
import Hero from "@/components/Hero.vue";
import CourseList from "@/components/CourseList.vue";
export default {

    components:{
      CourseList,
        Hero
    },
 
};
</script>

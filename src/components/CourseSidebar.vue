<template>
   <section class="card course-sidebar " id="courseAccordion">
      <!-- List group -->

      <ul class="list-group list-group-flush" style="height: 850px;" data-simplebar >
        <li class="list-group-item">
          <h4 class="mb-0">Table of Content</h4>
        </li>
        <!-- List group item -->
        
        <li v-for="(lesson,index) in lessons" :key="lesson.id" class="list-group-item">
          <!-- Toggle -->
          <a  class="d-flex align-items-center text-inherit text-decoration-none h4 mb-0" data-bs-toggle="collapse"
          :href="`#courseTwo${lesson.id}`" role="button" aria-expanded="false" :aria-controls="`courseTwo${lesson.id}`">
            <div class="me-auto">
                {{ lesson.title }}
            </div>
            <span class="chevron-arrow  ms-4">
              <i class="fe fe-chevron-down fs-4"></i>
            </span>
          </a>
         
            
     <div class="collapse " :id="`courseTwo${lesson.id}`" data-bs-parent="#courseAccordion">
              <div class="py-4 nav" id="course-tabOne" role="tablist" aria-orientation="vertical"
                style="display: inherit;">
                <a  @click="desactivateAll(`lesson-${lesson.id}`)" class="mb-2 d-flex justify-content-between text-inherit align-items-center text-decoration-none " :class="{'disableClick':index!=0}"
                  :id="`lesson-${lesson.id}-tab`" data-bs-toggle="pill" :href="`#lesson-${lesson.id}`" role="tab" :aria-controls="`lesson-${lesson.id}`"
                  aria-selected="false" >
                  <div class="text-truncate">
                    <span class="icon-shape bg-light text-primary icon-sm  rounded-circle me-2"><i
                        class="fe   fs-6" :class="[index ?'fe-lock':'fe-play']"></i></span>
                    <span>content</span>
                  </div>
                  <div class="text-truncate">
                    <span>1m 7s</span>
                  </div>
                </a>
                <a v-if="lesson.video" @click="desactivateAll(`lesson-${lesson.id}-video-${lesson.video.id}`)" class="mb-2 d-flex justify-content-between text-inherit align-items-center text-decoration-none" :class="{'disableClick':index!=0}"
                  :id="`lesson-${lesson.id}-video-${lesson.video.id}-tab`" data-bs-toggle="pill" :href="`#lesson-${lesson.id}-video-${lesson.video.id}`" role="tab" :aria-controls="`lesson-${lesson.id}-video-${lesson.video.id}`"
                  aria-selected="false" >
                  <div class="text-truncate">
                    <span class="icon-shape bg-light text-primary icon-sm  rounded-circle me-2"><i
                      class="fe   fs-6" :class="[index ?'fe-lock':'fe-play']"></i></span>
                    <span>Video</span>
                  </div>
                  <div class="text-truncate">
                    <span>1m 7s</span>
                  </div>
                </a>
                
              </div>
            </div>

      
        </li>
        
        <li class="list-group-item">
          <!-- Toggle -->
         
            <div class="me-auto">
              <a class="mb-2  h4 d-flex justify-content-between text-inherit align-items-center text-decoration-none" 
                  :id="`lesson-quize-tab`" data-bs-toggle="pill" :href="`#lesson-quize`" role="tab" :aria-controls="`lesson-quize`"
                  aria-selected="false" @click="desactivateAll(`lesson-quize`)">
                  Quiz
                 
                </a>
                
            </div>
        
         
            
     

      
        </li>

      
      </ul>

    </section>
  
</template>
<script>
import axios from "axios"
export default {
    props:{
      lessons:Array,
      quizes:Array,
    },
    data(){
          return {
          }
    },
    methods:{
    
     desactivateAll(id){
        const  tabPanels=  document.querySelectorAll(".tab-pane");
          
        for(const tabPanel of tabPanels){
          if(tabPanel.id==id )  {
            tabPanel.classList.add("active","show")
          }else{
            tabPanel.classList.remove("active","show")

          }
        }
     }
    },
    async mounted(){
     

    }
}
</script>

<style scoped>
.active{
  color: var(--geeks-primary);
}

</style>
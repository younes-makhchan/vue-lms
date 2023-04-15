<template>
   
<!-- Card -->
<div class="card mb-4 " >
     <!-- Card Header -->
     <div class="card-header">
        <h4 class="mb-0">Quiz</h4>
     </div>
     <!-- Card Body -->
     <div class="card-body">
        <!-- Form -->
        <form class="needs-validation" novalidate>
        
        <div v-for="(question,index) in questions" :key="question.id" class="mb-3 mb-4">
        <label :for="question.id" class="form-label">
            {{ question.text }}
        </label>
        <div class="d-flex p-2 gap-3">
            <input class="form-control" :id="question.id" v-model="answers[index]" placeholder="Answer" type="text" required="" >
            <button type="button" class="btn btn-primary" @click="submitAnswer(question.id,index)">
                Submit  
        </button>
     </div>
         <div v-if="feedback[index]">
               <div v-if="feedback[index].is_correct" class="text-success">
                    Correct Answer
               </div>
               <div v-else class="text-danger">
                    Invalid Answer 
               </div>

         </div>  
        
    </div>
 
  
</form>
 </div>
 </div>
</template>

<script>
import axios from "axios"
import { mapState } from "vuex";
export default{
    
    computed:{...mapState("course",["course","lessons","quizes","activeLesson"])},
    data(){
        return {
                questions:[],
                answers:[],
                feedback:[]
        }
    },
    created(){
    },
    methods:{
      async  submitAnswer(id,index){
        try{

            let formData={
                "user":3,
                "question":id,
                "answer":this.answers[index]
            }
            console.log(formData)
            const feedbackResponse = await axios.post(`/api/user-responses/`,formData);
            this.feedback[index]=feedbackResponse.data

        }catch(error){
            console.log(error)
        }

        },
    
    
        async getQuestions(){
            try{
                const questionsResponse = await axios(`/api/quizzes/${this.quizes[0].id}/questions/`);
                this.questions=questionsResponse.data;
               

                
            }catch(error){
                console.log(error)
            }
        } 
    },
    watch:{
        quizes(old,newvalue){
                if(this.quizes.length>0)
                    this.getQuestions();
            } 
    }
}
</script>
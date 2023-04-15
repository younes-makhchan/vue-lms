<template>
<main>

  <section class="container d-flex flex-column">
      <div class="row align-items-center justify-content-center g-0 min-vh-100">
  
        <div class="col-lg-5 col-md-8 py-8 py-xl-0">
          <!-- Card -->
          <div class="card shadow ">
            <!-- Card body -->
            <div class="card-body p-6">
              <div class="mb-4">
              
                <h1 class="mb-1 fw-bold">Login</h1>
                <span>Don’t have an account? <router-link href="sign-up.html" class="ms-1" :to="`/sign-up`">Sign up</router-link></span>
              </div>
              <!-- Form -->
              <form class="needs-validation" @submit.prevent="submitForm" novalidate>
                  <!-- Username -->
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" id="username" v-model="username"  class="form-control" name="username" placeholder="Username address here"
                    required>
                    <div class="invalid-feedback">
                      Please Choose a username
                    </div>
                </div>
                  <!-- Password -->
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" id="password"  v-model="password" class="form-control" name="password" placeholder="**************"
                    required>
                    <div class="invalid-feedback">
                      Please enter a valid password
                    </div>
                </div>
                  <!-- Checkbox -->
                <div class="d-lg-flex justify-content-between align-items-center mb-4">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="rememberme">
                    <label class="form-check-label " for="rememberme">Remember me</label>
                  </div>
                  <div>
                    <a href="forget-password.html">Forgot your password?</a>
                  </div>
                </div>
                <div>
                    <!-- Button -->
                    <div class="d-grid">
                  <button type="submit" class="btn btn-primary ">Sign in</button>
                </div>
                </div>
                <hr class="my-4">
                <div class="mt-4 text-center">
                  <!--Facebook-->
                  <a href="#" class="btn-social btn-social-outline btn-facebook">
                    <i class="mdi mdi-facebook fs-4"></i>
                  </a>
                  <!--Twitter-->
                  <a href="#" class="btn-social btn-social-outline btn-twitter">
                    <i class="mdi mdi-twitter fs-4"></i>
                  </a>
                  <!--LinkedIn-->
                  <a href="#" class="btn-social btn-social-outline btn-linkedin">
                    <i class="mdi mdi-linkedin"></i>
                  </a>
                  <!--GitHub-->
                  <a href="#" class="btn-social btn-social-outline btn-github">
                    <i class="mdi mdi-github"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
</main>

</template>

<script>
import axios from 'axios';

export default{

    data(){
        return{
            username:"",
            password:""
        }
    },
    created(){
        if(this.$store.state.isAuthenticated){
            this.$router.push("/courses")
        }
    },
    methods:{
       async submitForm(){
            try{
              axios.defaults.headers.common["Authorization"]= null;
                localStorage.removeItem("token");
                
                const formData={
                "username": this.username,
                "password": this.password
                }
                const response=await axios.post("/api-auth/",formData);
                const token=response.data.token;

                localStorage.setItem("token", token);
                
                this.$store.commit("setToken", token);
                
                axios.defaults.headers.common["Authorization"] = "JWT " + token;
                
                const toPath=this.$route.query.to||"/";
                this.$router.push(toPath);

            }catch(error){
                    console.log(error.message)
            }
            
        }
    }
}

</script>


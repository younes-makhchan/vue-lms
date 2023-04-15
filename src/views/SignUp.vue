<template>
  <main>
    <section class="container d-flex flex-column">
      <div class="row align-items-center justify-content-center g-0 min-vh-100">
        <div class="col-lg-5 col-md-8 py-8 py-xl-0">
          <!-- Card -->
          <div class="card shadow">
            <!-- Card body -->
            <div class="card-body p-6">
              <div class="mb-4">
                <h1 class="mb-1 fw-bold">Sign up</h1>
                <span
                  >Already have an account?
                  <router-link href="sign-in.html" class="ms-1" :to="`/login`"
                    >Login</router-link
                  ></span
                >
              </div>
              <!-- Form -->
              <form
                class="needs-validation"
                @submit.prevent="submitForm"
                novalidate
              >
                <!-- Username -->
                <div class="mb-3">
                  <label for="username" class="form-label">User Name</label>
                  <input
                    type="text"
                    id="username"
                    v-model="username"
                    class="form-control"
                    name="username"
                    placeholder="User Name"
                    required
                  />
                  <div class="invalid-feedback">Please Choose a username</div>
                </div>
                <!-- Email -->
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    v-model="email"
                    class="form-control"
                    name="email"
                    placeholder="Email address here"
                    required
                  />
                  <div class="invalid-feedback">
                    Please Choose a valid email
                  </div>
                </div>
                <!-- Password -->
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    v-model="password"
                    class="form-control"
                    name="password"
                    placeholder="**************"
                    required
                  />
                  <div class="invalid-feedback">
                    Please Choose a valid password
                  </div>
                </div>
                <!-- Checkbox -->
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="agreeCheck"
                      id="agreeCheck"
					  required
                    />
                    <label class="form-check-label" for="agreeCheck"
                      ><span
                        >I agree to the
                        <a href="terms-condition-page.html">Terms of Service </a
                        >and
                        <a href="terms-condition-page.html"
                          >Privacy Policy.</a
                        ></span
                      ></label
                    >
                    <div class="invalid-feedback">
                      Read and Agree to the terms of service and Privacy Policy
                    </div>
                  </div>
                </div>
                <div>
                  <!-- Button -->
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">
                      Create Free Account
                    </button>
                  </div>
                </div>
                <hr class="my-4" />
                <div class="mt-4 text-center">
                  <!--Facebook-->
                  <a
                    href="#"
                    class="btn-social btn-social-outline btn-facebook"
                  >
                    <i class="mdi mdi-facebook fs-4"></i>
                  </a>
                  <!--Twitter-->
                  <a href="#" class="btn-social btn-social-outline btn-twitter">
                    <i class="mdi mdi-twitter fs-4"></i>
                  </a>
                  <!--LinkedIn-->
                  <a
                    href="#"
                    class="btn-social btn-social-outline btn-linkedin"
                  >
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
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      agreeCheck: false,
      error: [],
    };
  },
  methods: {
    async submitForm() {
      try {
        const Formdata = {
          username: this.username,
          password: this.password,
          email: this.email,
        };
		
        const response = await axios.post("api/register/", Formdata);

        this.$router.push("/login");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

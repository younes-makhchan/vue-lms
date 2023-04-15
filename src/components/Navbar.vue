<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-default">
	<div class="container-fluid px-0">
		<a class="navbar-brand" href="./index.html"><img src="/assets/images/brand/logo/logo.svg"
				alt="" class="" ></a>
		<!-- Mobile view nav wrap -->
		<ul class="navbar-nav navbar-right-wrap ms-auto d-lg-none d-flex nav-top-wrap">
      
   
			<li class="dropdown ms-2">
				<a class="rounded-circle" href="#" role="button" data-bs-toggle="dropdown">
					<div class="avatar avatar-md avatar-indicators avatar-online">
						<img alt="avatar" src="/assets/images/avatar/avatar-1.jpg" class="rounded-circle" >
					</div>
				</a>
				<div class="dropdown-menu dropdown-menu-end shadow">
					<div class="dropdown-item">
						<div class="d-flex">
							<div class="avatar avatar-md avatar-indicators avatar-online">
								<img alt="avatar" src="/assets/images/avatar/avatar-1.jpg"
									class="rounded-circle" >
							</div>
							<div class="ms-3 lh-1">
								<h5 class="mb-1">Annette Black</h5>
								<p class="mb-0 text-muted">annette@geeksui.com</p>
							</div>
						</div>
					</div>
					<div class="dropdown-divider"></div>
					<ul class="list-unstyled">
						<li class="dropdown-submenu">
							<a class="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
								<i class="fe fe-circle me-2"></i>Status
							</a>
							<ul class="dropdown-menu">
								<li>
									<a class="dropdown-item" href="#">
										<span class="badge-dot bg-success me-2"></span>Online
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										<span class="badge-dot bg-secondary me-2"></span>Offline
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										<span class="badge-dot bg-warning me-2"></span>Away
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										<span class="badge-dot bg-danger me-2"></span>Busy
									</a>
								</li>
							</ul>
						</li>

						<li>
							<a class="dropdown-item" href="./pages/profile-edit.html">
								<i class="fe fe-user me-2"></i>Profile
							</a>
						</li>
						<li>
							<a class="dropdown-item" href="./pages/student-subscriptions.html">
								<i class="fe fe-star me-2"></i>Subscription
							</a>
						</li>
						<li>
							<a class="dropdown-item" href="#">
								<i class="fe fe-settings me-2"></i>Settings
							</a>
						</li>
					</ul>
					<div class="dropdown-divider"></div>
					<ul class="list-unstyled">
						<li>
							<a class="dropdown-item" href="./index.html">
								<i class="fe fe-power me-2"></i>Sign Out
							</a>
						</li>
					</ul>
				</div>
			</li>
		</ul>
		<!-- Button -->
		<button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
			data-bs-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="icon-bar top-bar mt-0"></span>
			<span class="icon-bar middle-bar"></span>
			<span class="icon-bar bottom-bar"></span>
		</button>
		<!-- Collapse -->
		<div class="collapse navbar-collapse" id="navbar-default">
			<ul class="navbar-nav">
				<li class="nav-item " v-if="auth">
					<router-link :active-class="`active`" class="nav-link" href="#" id="navbarBrowse" :to="`/`" >
						Courses
					</router-link >
				
				</li>
			
			</ul>
	
			<div class="ms-auto d-flex align-items-center">
			   <a href="#" class="form-check form-switch theme-switch btn btn-light btn-icon rounded-circle ">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
	
			   </a>
			<ul class="navbar-nav navbar-right-wrap ms-2 d-none d-lg-block">
			
        
				<li class="dropdown ms-2 d-inline-block" v-if="auth">
					<a class="rounded-circle" href="#" data-bs-toggle="dropdown" data-bs-display="static"
						aria-expanded="false">
						<div class="avatar avatar-md avatar-indicators avatar-online">
							<img alt="avatar" src="/assets/images/avatar/avatar-1.jpg"
								class="rounded-circle" >
						</div>
					</a>
					<div class="dropdown-menu dropdown-menu-end">
						<div class="dropdown-item">
							<div class="d-flex">
								<div class="avatar avatar-md avatar-indicators avatar-online">
									<img alt="avatar" src="/assets/images/avatar/avatar-1.jpg"
										class="rounded-circle" >
								</div>
								<div class="ms-3 lh-1">
									<h5 class="mb-1">Annette Black</h5>
									<p class="mb-0 text-muted">annette@geeksui.com</p>
								</div>
							</div>
						</div>
						<div class="dropdown-divider"></div>
						<ul class="list-unstyled">
						
						</ul>
						<div class="dropdown-divider"></div>
						<ul class="list-unstyled">
							<li>
								<a class="dropdown-item" @click.prevent="logOut">
									<i class="fe fe-power me-2" ></i>Sign Out
								</a>
							</li>
						</ul>
					</div>
				</li>
        <li class="nav-item" v-else>
          <router-link  class="nav-link" href="#" id="navbarBrowse" :to="`/login`" >
						Login
					</router-link >
        </li>
			</ul>
			</div>
		</div>
	</div>
</nav>

</template>
<script>
import { computed } from '@vue/reactivity';
import axios  from 'axios';
export default {

  data(){
    return {
      
    }
  },
  mounted(){
    
  },
  methods:{
      logOut(){
        axios.defaults.headers.common["Authorization"] = '';
                localStorage.removeItem("token");
                this.$store.commit("removeToken")
                this.$router.push("/login")
      }
  }, 
  computed:{
    auth(){
      return this.$store.state.isAuthenticated
    }

  }
  

};
</script>

<style scoped>

.active{
  color: var(--geeks-primary)!important;
}

</style>

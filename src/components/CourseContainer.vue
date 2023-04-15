<template>
  <section class="mt-6 course-container">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- Tab content -->
          <div class="tab-content content" id="course-tabContent">
            <template v-for="(lesson,index) in lessons" :key="lesson.id">
              <div
                class="tab-pane"
                :id="`lesson-${lesson.id}`"
                role="tabpanel"
                :aria-labelledby="`lesson-${lesson.id}-tab`"
              >
                <div
                  class="d-flex align-items-center justify-content-between mb-4"
                >
                  <div>
                    <h3 class="mb-0 text-truncate-line-2">
                      Content
                    </h3>
                  </div>
                  <div>
                    <!-- Dropdown -->
                    <span class="dropdown">
                      <a
                        href="#"
                        class="ms-2 text-muted"
                        id="dropdownInfo"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fe fe-help-circle"></i>
                      </a>
                      <span
                        class="dropdown-menu dropdown-menu-lg p-3 dropdown-menu-end"
                        aria-labelledby="dropdownInfo"
                      >
                        Talk with our support
                      </span>
                    </span>
                    <!-- Dropdown -->
                    <span class="dropdown">
                      <a
                        class="text-muted text-decoration-none"
                        href="#"
                        role="button"
                        id="shareDropdown1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fe fe-more-vertical"></i>
                      </a>
                      <span
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="shareDropdown1"
                      >
                        <span class="dropdown-header">Share</span>
                        <a class="dropdown-item" href="#"
                          ><i class="mdi mdi-facebook dropdown-item-icon"></i
                          >Facebook</a
                        >
                        <a class="dropdown-item" href="#"
                          ><i class="mdi mdi-twitter dropdown-item-icon"></i
                          >Twitter</a
                        >
                        <a class="dropdown-item" href="#"
                          ><i class="mdi mdi-linkedin dropdown-item-icon"></i
                          >Linked In</a
                        >
                        <a class="dropdown-item" href="#"
                          ><i
                            class="mdi mdi-content-copy dropdown-item-icon"
                          ></i
                          >Copy Link</a
                        >
                      </span>
                    </span>
                  </div>
                </div>

                <div class="p-5 border">
                  <p>{{ lesson.content }}</p>
                </div>
              </div>
              <!-- Tab pane -->
              <div
                class="tab-pane"
                :id="`lesson-${lesson.id}-video-${lesson.video.id}`"
                role="tabpanel"
                :aria-labelledby="`lesson-${lesson.id}-video-${lesson.video.id}-tab`"
              >
                <!-- Video -->
                <div
                  class="d-flex align-items-center justify-content-between mb-4"
                >
                  <div>
                    <h3 class="mb-0 text-truncate-line-2">
                      Video
                    </h3>
                  </div>
                  <div>
                    <!-- Dropdown -->
                    <span class="dropdown">
                      <a
                        href="#"
                        class="ms-2 text-muted"
                        id="dropdownInfo"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fe fe-help-circle"></i>
                      </a>
                      <span
                        class="dropdown-menu dropdown-menu-lg p-3 dropdown-menu-end"
                        aria-labelledby="dropdownInfo"
                      >
                        Talk with our support
                      </span>
                    </span>
                    <!-- Dropdown -->
                    <span class="dropdown">
                      <a
                        class="text-muted text-decoration-none"
                        href="#"
                        role="button"
                        id="shareDropdown1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fe fe-more-vertical"></i>
                      </a>
                      <span
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="shareDropdown1"
                      >
                        <span class="dropdown-header">Share</span>
                        <a class="dropdown-item" href="#"
                          ><i class="mdi mdi-facebook dropdown-item-icon"></i
                          >Facebook</a
                        >
                        <a class="dropdown-item" href="#"
                          ><i class="mdi mdi-twitter dropdown-item-icon"></i
                          >Twitter</a
                        >
                        <a class="dropdown-item" href="#"
                          ><i class="mdi mdi-linkedin dropdown-item-icon"></i
                          >Linked In</a
                        >
                        <a class="dropdown-item" href="#"
                          ><i
                            class="mdi mdi-content-copy dropdown-item-icon"
                          ></i
                          >Copy Link</a
                        >
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  v-if="lesson.video"
                  class="embed-responsive position-relative w-100 d-block overflow-hidden p-0 text-center"
                  style="height: 600px"
                >
                  <video src="/video/video.mp4" controls></video>
                </div>
              </div>
             
            </template>

            <div 
                class="tab-pane"
                :id="`lesson-quize`"
                
                role="tabpanel"
                 data-bs-toggle="pill"  :aria-labelledby="`lesson-quize-tab`"
                >
                <quize ></quize>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import quize from "@/components/Quize.vue"
export default {
  components:{
    quize
  },
  props: {
    lessons: Array,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    
  },
 
};
</script>

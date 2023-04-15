<template>
  <div class="col-lg-3 col-md-6 col-12">
    <!-- Card -->
    <div class="card mb-4 card-hover">
    
      <!-- Card body -->
      <div class="card-body">
        <h3 class="h4 mb-2 text-truncate-line-2">
          <router-link :to="`/courses/${id}`" class="text-inherit">
            {{ title }}
          </router-link>
        </h3>
        <ul class="mb-3 list-inline">
          <li class="list-inline-item">
            <i class="mdi mdi-clock-time-four-outline text-muted me-1"></i>3h
            56m
          </li>
          <li class="list-inline-item">
            <svg
              class="me-1 mt-n1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ><rect
                x="3"
                y="8"
                width="2"
                height="6"
                rx="1"
                fill="#754FFE"
              ></rect>
              <rect
                x="7"
                y="5"
                width="2"
                height="9"
                rx="1"
                fill="#DBD8E9"
              ></rect>
              <rect
                x="11"
                y="2"
                width="2"
                height="12"
                rx="1"
                fill="#DBD8E9"
              ></rect></svg>
              Beginner
          </li>
        </ul>
        <div class="py-2">
          <p class="text-muted">{{ description }}</p>
        </div>
        <div class="lh-1">
          <span>
            <i class="mdi mdi-star text-warning me-n1"></i>
            <i class="mdi mdi-star text-warning me-n1"></i>
            <i class="mdi mdi-star text-warning me-n1"></i>
            <i class="mdi mdi-star text-warning me-n1"></i>
            <i class="mdi mdi-star text-warning"></i>
          </span>
          <span class="text-warning">4.5</span>
          <span class="fs-6 text-muted">(9,300)</span>
        </div>
      </div>
      <!-- Card Footer -->
      <div class="card-footer">
        <div class="row align-items-center g-0">
          <div class="col-auto">
            <img
              src="assets/images/avatar/avatar-3.jpg"
              class="rounded-circle avatar-xs"
              alt=""
            />
          </div>
          <div class="col ms-2">
            <span>Morris Mccoy</span>
          </div>
          <div class="col-auto">
            <a href="#" class="text-muted bookmark">
              <i class="fe fe-bookmark"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    id: Number,
  },
};
</script>

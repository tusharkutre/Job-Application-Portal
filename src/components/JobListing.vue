<script setup>
    import jobData from '@/jobs.json'
    import {ref} from 'vue'
    import SingleJobListing from './SingleJobListing.vue';

    //ref - hook
    const jobs = ref(jobData);
</script>

<template>
        <!-- Browse Jobs -->
        <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- added hover effect on cards-->
            <SingleJobListing class="hover:-translate-y-4 transition-transform duration-200" v-for="job in jobs" :key="job.id" :job="job"/>

        </div>

      </div>
    </section>
</template>
<script setup>
    import uber from '@/assets/img/uber.jpeg';
    import { defineProps } from 'vue';

    defineProps({
        job : Object
    });
</script>

<template>
      <!-- Job card 1 -->
      <div class="bg-white rounded-xl shadow-md relative">
              <div class="p-4">
  
                  <div class="text-gray-600 my-2">Full-Time</div>
                <div class="mb-2">
                  <h3 class="text-xl font-bold">{{job.title}}</h3>
                </div>
  
                <div class="my-3">
                  <div class="flex items-center gap-1">
                      <img class="w-8":src="uber" alt="Uber Logo">
                      <h3 class="text-lg font-semibold">{{job.company}}</h3>
                  </div>
                </div>
  
                <div class="JD mb-5">
                    {{ job.description }}
                </div>
  
  
                <div class="border border-gray-100 mb-5"></div>
  
                <div class="flex flex-col lg:flex-row justify-between mb-4">
                  <div class="text-blue-700 font-medium mb-3">
                      <p>{{job.location}}</p>
                  </div>
                  <a
                    :href="'/job/' + job.id"
                    class="h-[36px] font-semibold bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
</template>
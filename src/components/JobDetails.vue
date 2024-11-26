<script setup>
import { ref, onMounted } from 'vue';
import jobData from '@/jobs.json'; // Ensure this path is correct based on your project structure
import { useRoute } from 'vue-router';

// Reactive reference to hold the job details
const job = ref({});

// Get the route parameters
const route = useRoute();

// Fetch job details based on the ID from the route parameters
onMounted(() => {
  const jobId = parseInt(route.params.id);
  // Find the job by ID from the jobData
  const foundJob = jobData.find(job => job.id === jobId);
  if (foundJob) {
    job.value = foundJob;
  } else {
    // Handle case where job is not found (optional)
    console.error('Job not found');
  }
});

</script>

<template>
    <div class="job-details">
      <h2 class="job-title">{{ job.title }}</h2>
      <h3 class="job-company">{{ job.company }}</h3>
      <p class="job-location">{{ job.location }}</p>
      <div class="job-description">
        <h4>Job Description:</h4>
        <p>{{ job.description }}</p>
      </div>
      <router-link to="/" class="back-button">Back to Job Listings</router-link>
      <router-link to="/apply" class="Apply-button">Apply Now</router-link>
    </div>
  </template>
    
  <style scoped>
  .job-details {
    padding: 16px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .job-title {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .job-company {
    font-size: 1.5rem;
    color: gray;
  }
  
  .job-location {
    color: blue;
  }
  
  .job-description {
    margin-top: 16px;
  }
  
  .back-button {
    display: inline-block;
    margin-top: 16px;
    padding: 8px 16px;
    background-color: green;
    color: white;
    border-radius: 4px;
    text-decoration: none;
  }
  
  .back-button:hover {
    background-color: black;
  }

  .Apply-button{
    display: inline-block;
    margin-left: 10px;
    background-color: green;
    padding: 8px 16px;
    color: white;
    border-radius: 4px;
    text-decoration: none;
  }
  .Apply-button:hover {
    background-color: black;
  }
  </style>
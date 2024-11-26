<script>

import ToastPlugin, { useToast } from 'vue-toast-notification';

//intailization
const Toast = useToast();

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        resume: null,
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      this.formData.resume = event.target.files[0];
    },
    submitApplication() {
      // Handle form submission logic here
      try {
        Toast.success("Application has been successfully submitted!")
        console.log("Application submitted:", this.formData);
      // You can add API call to submit the form data
      } catch (error) {
      console.error("Submission error:", error);
      Toast.error("Error: " + error.message);
     }
    },
  },
};
</script>

<template>
    <h2 class="text-3xl font-semibold px-4 py-4">Application Form </h2>
    <div class="application-form border-2 rounded-lg border-gray-300 py-10">
      <!-- to stop the browser behavior -->
      <form @submit.prevent="submitApplication">
        <div class="username">
          <label for="name">Name:</label>
          <input class="border-2 border-gray-300 ml-1" type="text" id="name" placeholder="Enter Name" v-model="formData.name" required />
        </div>
        <div class="user-mail">
          <label for="email">Email:</label>
          <input class="border-2 border-gray-300 ml-2" type="email" id="email" placeholder="Enter Email" v-model="formData.email" required />
        </div>
        <div>
          <label for="resume">Resume:</label>
          <input type="file" id="resume" @change="handleFileUpload" required />
        </div>
        <router-link to="/job/1" class="Apply-button">Back</router-link>
        <button class="submit-button" type="submit">Submit Application</button>
      </form>
    </div>
  </template>
    
  <style scoped>
  .submit-button{
    display: inline-block;
    margin-top: 16px;
    padding: 8px 16px;
    background-color: green;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    margin-left: 10px;
  }
  .submit-button:hover{
    background-color: black;
  }
  .Apply-button{
    display: inline-block;
    margin-top: 16px;
    padding: 8px 16px;
    background-color: green;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    margin-left: 10px;
  }
  .Apply-button:hover{
    background-color: black;
  }
  .application-form {
    max-width: 600px;
    margin: auto;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }
  .application-form div {
    margin-bottom: 15px;
  }
  </style>
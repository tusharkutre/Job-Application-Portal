import { createRouter, createWebHistory } from 'vue-router';
import JobDetails from '../components/JobDetails.vue';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import ApplicationForm from '@/components/ApplicationForm.vue'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/job/:id',
    name: 'job-details',
    component: JobDetails
  },
  {
    path: '/apply',
    name: 'ApplicationForm',
    component: ApplicationForm,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router
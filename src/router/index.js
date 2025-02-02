// src/router/index.js
import { createRouter,createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Resume from '../pages/resume.vue'
import Index from '../pages/index.vue'
// Define the routes
const routes = [
    { path: '/', component: Index },
  { path: '/home', component: Home },
  { path: '/resume', component: Resume },
  { path: '/index', component: Index },
  // ... you can add more routes here
]

// Create the router instance
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes, // short for `routes: routes`
})

export default router

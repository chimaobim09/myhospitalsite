import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DemoView from '../views/DemoView.vue'
import ModulesView from '../views/ModulesView.vue'
import FaQ from '../views/FAQ.vue'
import ContactUS from '../views/Contact.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/demo',
    name: 'demo',
    component: DemoView
  },
  {
    path: '/modulesview',
    name: 'ModulesView',
    component: ModulesView
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FaQ
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUS
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

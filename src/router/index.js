import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/childrens-ministry',
    name: 'ChildernMinistry',
    component: () => import('../components/ChildernMinistry.vue')
  },
  {
    path: '/youth-ministry',
    name: 'YouthMinistry',
    component: () => import('../components/YouthMinistry.vue')
  },
  {
    path: '/women-ministry',
    name: 'WomensMinistry',
    component: () => import('../components/WomensMinistry.vue')
  },
  {
    path: '/men-ministry',
    name: 'MenMinistry',
    component: () => import('../components/MenMinistry.vue')
  },
  {
    path: '/pentsos',
    name: 'PENTSOS',
    component: () => import('../components/PENTSOS.vue')
  },
  {
    path: '/media',
    name: 'Media',
    component: () => import('../components/Media.vue')
  },
  {
    path: '/secretarial',
    name: 'Secretarial',
    component: () => import('../components/Secretarial.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../components/Gallery.vue')
  },
  {
    path: '/district-presbytery',
    name: 'DistrictPresbytery',
    component: () => import('../components/DistrictPresbytery.vue')
  },
  {
    path: '/district-executive',
    name: 'DistrictExecutive',
    component: () => import('../components/DistrictExecutive.vue')
  },
  {
    path: '/national-area-heads',
    name: 'NationalAreaHeads',
    component: () => import('../components/NationalAreaHeads.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue')
  },
  {
    path: '/join',
    name: 'JoinUs',
    component: () => import('../components/JoinUs.vue')
  },
  {
    path: '/admin/submissions',
    name: 'Submissions',
    component: () => import('../views/Submissions.vue')
  },
  {
    path: '/chat-with-us',
    name: 'ChatWithUs',
    component: () => import('../components/ChatWithUs.vue')
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import('../components/AboutUs.vue')
  },
  {
    path: '/vision',
    name: 'Vision',
    component: () => import('../components/Vision.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

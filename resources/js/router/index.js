import { createRouter, createWebHistory } from 'vue-router'
import Test from '../Pages/Test.vue'
// import List from '../crud/List.vue'

const routes = [

  {
    path: '/test',
    name: 'Test',
    component: Test
  },
 
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
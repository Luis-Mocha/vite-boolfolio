import { createRouter , createWebHistory} from 'vue-router'

const routes = [
    {path: '', name: 'home', component: ()=> import('../pages/AppHome.vue')},
    {path: '/Projects', name: 'projects', component: ()=> import('../pages/AppMain.vue')},


]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
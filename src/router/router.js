import { createRouter , createWebHistory} from 'vue-router'

// const routes = [
//     {path: '', name: 'home', component: ()=> import('../pages/AppHome.vue')},
//     {path: '/Projects', name: 'projects', component: ()=> import('../pages/AppMain.vue')},
// ]

// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// })


// nuova sinstassi
import AppHome from '../pages/AppHome.vue';
import AppMain from '../pages/AppMain.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            name: 'home',
            component: AppHome
        },
        {
            path: '/Projects',
            name: 'projects',
            component: AppMain
        },
    ]
})

export { router };
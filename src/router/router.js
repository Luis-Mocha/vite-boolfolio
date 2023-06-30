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
import SingleProject from '../pages/SingleProject.vue';
import NotFound from '../pages/NotFound.vue';

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
        {
            path: '/Projects/:slug',
            name: 'project',
            component: ()=> import('../pages/SingleProject.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFound
        },
    ]
})

export { router };
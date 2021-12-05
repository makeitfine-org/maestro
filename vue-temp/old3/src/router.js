import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home'

const routing = {
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
        },
        {
            path: '/load',
            component: () => import('./components/Loading.vue')
        }
    ]
}

const router = createRouter(routing)

export default router
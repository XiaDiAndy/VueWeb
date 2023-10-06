import { createRouter,createWebHistory } from "vue-router";

const routes = [
        {
            path:'/',
            redirect:"home"
        },
        {
            name:"home",
            path:'/home',
            component: () => import('../views/SYS/Login.vue')
        },
        {
            name:"Main",
            path:'/Main',
            component: () => import('../views/MainWeb.vue')
        },
        {
            name:"Login",
            path:'/Login',
            component: () => import('../views/SYS/Login.vue')
        },
        {
            name:"SNRegister",
            path:'/SNRegister',
            component: () => import('../views/MES/SNRegister.vue')
        },
        {
            name:"test",
            path:'/test',
            component: () => import('../views/test.vue')
        },
        {
            name:"test1",
            path:'/test',
            component: () => import('../views/test.vue')
        }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;
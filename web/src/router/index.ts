import { createRouter,createWebHistory } from "vue-router";

const routes = [
        {
            path:'/',
            redirect:"/home"
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
        }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;
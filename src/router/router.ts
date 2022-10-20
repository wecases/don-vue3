import { createRouter,createWebHistory,createWebHashHistory,RouteRecordRaw } from 'vue-router'

import user from "@/page/user/user.vue"
import home from "@/page/home.vue"
import dashboard from "@/page/dashboard.vue"
import resource from "@/page/resource.vue"
import root from "@/page/root.vue"
import platform from "@/page/platform.vue"
import mail from "@/page/mail.vue"
const routes:Array<RouteRecordRaw>= [
    {
        path: '/',
        name:'home',
        component: home,
        children:[
            {
                path:'/dashboard',
                component:dashboard
            },
            {
                path:'/resource',
                component:resource
            },
            {
                path:'/root',
                component:root
            },
            {
                path:'/platform',
                component:platform
            },
            {
                path:'/mail',
                component:mail
            },
        ]
    },
    {
        path: '/user',
        name:'user',
        component: user,
    },

]
const router = createRouter({
    history: createWebHistory(),
    // history:createWebHashHistory(),
    routes,
})

export default router;


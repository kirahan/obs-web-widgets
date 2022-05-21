import { loginToken } from '@/states'
import { createRouter, createWebHistory } from 'vue-router'
import Worker from '@/pages/Worker.vue'
import Login from '@/pages/Login.vue'
import Course from '@/pages/Course.vue'
import Layout from '@/layout/Main.vue'
const routes = [
    { 
    path: '/', name: 'Course', component: Layout, 
    children: [
        { path: '/course', name: '课程列表', component: Course },
    ]
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/worker', name: 'Worker', component: Worker },
    
]


const router = createRouter({
    history: createWebHistory('/obs-web-widgets'),
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/worker') return next()
    if (to.path === '/login') return next()
    
    // 查看token是否存在
    console.log('to.path',to.path)
    const token = loginToken.value
    if (!token) return next('/login')
    if (to.path === '/') return next('/course') 
    next()
})

export default router
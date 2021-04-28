import {createRouter,createWebHashHistory} from "vue-router"

const router = createRouter({
    mode: 'hash',
    history:createWebHashHistory(),
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => 
                import ( /* webpackChunkName: 'Index' */ './pages/index')
        },
        {
            path: '/index',
            name: 'index',
            component: () =>
                import ( /* webpackChunkName: 'Index' */ './pages/index')
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: 'Login' */ './pages/login')
        }
    ]
})

export default router

import Vue from 'vue'
import VueRouter from "vue-router"
import Home from './components/dashboard/Home'
import Dashboard from './components/layouts/Dashboard'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import auth from './middleware/auth'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', 
            component: Login,
            
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/dashboard',
            component: Dashboard,
            children: [
                {
                    path: '/home',
                    component: Home,
                    beforeEnter: auth,
                }
            ]
        },
        
    ]
})

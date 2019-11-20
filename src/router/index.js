import Vue from 'vue' 
import Router from 'vue-router' 
 
const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue') 
const loginLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/loginLayout.vue') 
 
function loadView(view) {  
    return () => import(/* webpackChunkName: "view[request]" */ 
    `../components/dashboardContents/${view}.vue`) 
} 
 
const routes = [     
    {       
        path: '/dashboard',       
        component: DashboardLayout,       
        children: [         
            {           
                name: 'UserController',           
                path: '/user',           
                component: loadView('userController')         
            },
            {           
                name: 'LayananKendaraanController',           
                path: '/layanankendaraan',           
                component: loadView('LayananKendaraanController')         
            }       
        ]     
    }, 
    {
        path: '/',
        component: loginLayout,
        name: 'loginLayout'
    }  
]   

Vue.use(Router) 
 
const router = new Router({mode: 'history', routes: routes}) 

export default router   
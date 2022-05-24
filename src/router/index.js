import {createRouter,createWebHashHistory}  from 'vue-router'

const ListPage = ()=>import('../view/ListPage.vue')
const DetailPage = ()=>import('../view/DetailPage.vue')
const HistoryPage = ()=>import('../view/HistoryPage.vue')
const routes = [
    {
        path:'/',
        name:'list',
        component:ListPage
    },
    {
        path:'/list',
        name:'List',
        component:ListPage
    },
    {
        path:'/history',
        name:'history',
        component:HistoryPage
    },
    {
        path:'/list/:id',
        name:'detail',
        component:DetailPage
    }

]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
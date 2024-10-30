import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import AboutStrPage from '@/views/AboutStrPage.vue'

import NvkSrtPage from '@/views/NvkSrtPage.vue';
import OtoplStrPage from '@/views/OtoplStrPage.vue';
import TeplosetiStrPage from '@/views/TeplosetiStrPage.vue';
import KonderStrPage from '@/views/KonderStrPage.vue';
import MetalStrPage from '@/views/MetalStrPage.vue';
import MonolitStrPage from '@/views/MonolitStrPage.vue';
import KrovelStrPage from '@/views/KrovelStrPage.vue';
import ElecmonStrPage from '@/views/ElecmonStrPage.vue';
import BlagousrtStrPage from '@/views/BlagousrtStrPage.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutStrPage',
        component: AboutStrPage
    },


    {
        path: '/NVK',
        name: 'NvkSrtPage',
        component: NvkSrtPage
    },
    {
        path: '/otopl',
        name: 'OtoplStrPage',
        component: OtoplStrPage
    },
    {
        path: '/telp',
        name: 'TeplosetiStrPage',
        component: TeplosetiStrPage
    },

    {
        path: '/kond',
        name: 'KonderStrPage',
        component: KonderStrPage
    },

    {
        path: '/metal',
        name: 'MetalStrPage',
        component: MetalStrPage
    },

    {
        path: '/monolit',
        name: 'MonolitStrPage',
        component: MonolitStrPage
    },

    {
        path: '/krovel',
        name: 'KrovelStrPage',
        component: KrovelStrPage
    },

    {
        path: '/elec',
        name: 'ElecmonStrPage',
        component: ElecmonStrPage
    },

    {
        path: '/blagous',
        name: 'BlagousrtStrPage',
        component: BlagousrtStrPage
    },



];


const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes,

    scrollBehavior(to, from, savedPosition){
// Если есть сохраненная позиция, возвращаемся к ней (при навигации назад)
       if(savedPosition){
        return savedPosition;
       }
       return {top: 0}; 
    }
});

export default router;
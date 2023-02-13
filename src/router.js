import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import RestaurantView from './views/RestaurantView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
       
        {
            path: '/restaurant/name',
            name: 'single-restaurant',
            component: RestaurantView
        },
        
    ]
})

export { router }
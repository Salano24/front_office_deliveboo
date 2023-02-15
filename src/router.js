import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            component: () => import('./views/HomeView.vue'),
            path: '/',
        },
        {
            path: '/restaurants/:id',
            component: () => import('./views/SingleRestaurantView.vue'),
            name: 'single-restaurant',
        }
    ]
})

export { router };
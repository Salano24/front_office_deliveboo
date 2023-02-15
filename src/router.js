import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('./views/HomeView.vue'),
        },
        {
            name: 'single-restaurant',
            path: '/restaurants/:id',
            component: () => import('./views/SingleRestaurantView.vue'),
        },
        {
            name: 'checkout',
            path: '/checkout/',
            component: () => import('./views/CheckoutView.vue'),
        }
    ]
})

export { router };
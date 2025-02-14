import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../pages/HomePage.vue';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'Home', component: HomePage },
        { path: '/todo-list', name: 'TodoList', component: () => import('../pages/TodoListPage.vue') },
        { path: '/basic-calculator', name: 'BasicCalculator', component: () => import('../pages/BasicCalculatorPage.vue') },
        { path: '/digital-clock', name: 'DigitalClock', component: () => import('../pages/DigitalClockPage.vue') }
    ]
});

export default router;
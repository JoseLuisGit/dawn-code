import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../pages/HomePage.vue';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'Home', component: HomePage },
        { path: '/todo-list', name: 'TodoList', component: () => import('../pages/TodoListPage.vue') },
    ]
});

export default router;
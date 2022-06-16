import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('./Login.vue'),
    }
];

export { routes };


import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('./Login.vue'),
    },
    {
        path: '/forgot',
        component: () => import('./ForgotPassword.vue'),
    },
    {
        path: '/reset-password',
        component: () => import('./ResetPassword.vue'),
    },
];

export { routes };


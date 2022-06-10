import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/layout/LayoutApp.vue'),
        children: [
            {
                path: '/',
                component: () => import('./Show.vue'),
            }
        ]
    },
];

export { routes };


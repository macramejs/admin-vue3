import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

import { routes as authRoutes } from '@/pages/auth/routes';
import { routes as homeRoutes } from '@/pages/home/routes';
// import { routes as mediaRoutes } from '@/pages/media/routes';
import { routes as pagesRoutes } from '@/pages/pages/routes';

const routes: RouteRecordRaw[] = [
    // guest
    ...authRoutes,
    // authed
    {
        path: '/',
        component: () => import('@/layout/AppRouterView.vue'),
        children: [
            ...homeRoutes,
            // ...mediaRoutes,
            ...pagesRoutes
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };

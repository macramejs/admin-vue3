import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { auth } from './middleware/auth';

import { routes as authRoutes } from '@/pages/auth/routes';
import { routes as homeRoutes } from '@/pages/home/routes';
// import { routes as mediaRoutes } from '@/pages/media/routes';
import { routes as pagesRoutes } from '@/pages/pages/routes';
import { routes as blocksRoutes } from '@/pages/blocks/routes';

const routes: RouteRecordRaw[] = [
    // guest
    ...authRoutes,
    // authed
    {
        path: '/',
        component: () => import('@/layout/AppRouterView.vue'),
        meta: {
            middleware: [auth],
        },
        children: [
            ...homeRoutes,
            // ...mediaRoutes,
            ...pagesRoutes,
            ...blocksRoutes,
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const nextFactory = (context: any, middleware: any, index: any) => {
    const subsequentMiddleware = middleware[index];
    if (!subsequentMiddleware) return context.next;

    return (...parameters: any) => {
        context.next(...parameters);
        const nextMiddleware = nextFactory(context, middleware, index);
        subsequentMiddleware({ ...context, next: nextMiddleware });
    };
};

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];

        const context = {
            from,
            next,
            router,
            to,
        };
        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({ ...context, next: nextMiddleware });
    }

    return next();
});

export { router };

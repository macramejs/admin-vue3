import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

import { routes as homeRoutes } from '@admin/pages/home/routes';
import { routes as mediaRoutes } from '@admin/pages/media/routes';
import { routes as pagesRoutes } from '@admin/pages/pages/routes';

const routes: RouteRecordRaw[] = [
    ...homeRoutes,
    ...mediaRoutes,
    ...pagesRoutes
];

const router = createRouter({
    history: createWebHistory('/admin'),
    routes,
})

export { router };
  
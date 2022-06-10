import { RouteRecordRaw } from 'vue-router';

import Show from './Show.vue';

const routes: RouteRecordRaw[] = [
    { path: '/media', component: () => import('./Index.vue') },
    { path: '/media/:id', component: () => import('./Index.vue') },
];

export { routes };


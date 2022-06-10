import { RouteRecordRaw } from 'vue-router';

import Show from './Show.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', component: () => import('./Show.vue') },
];

export { routes };


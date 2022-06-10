import { RouteRecordRaw } from 'vue-router';

import Show from './Show.vue';

const routes: RouteRecordRaw[] = [
    { 
        path: '/pages', 
        component: () => import('./Index.vue'),
        children: [
            { path: ':id', component: () => import('./Show.vue') },
        ]
    },
    // { path: '/pages/:id', component: () => import('./Show.vue') },
];

export { routes };


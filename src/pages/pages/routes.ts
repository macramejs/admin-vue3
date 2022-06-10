import { RouteRecordRaw } from 'vue-router';

import Show from './Show.vue';

const routes: RouteRecordRaw[] = [
    { 
        path: '/pages', 
        component: () => import('./PagesLayout.vue'),
        children: [
            { path: '', component: () => import('./Index.vue') },
            { path: ':id', component: () => import('./Show.vue') },
        ]
    },
    // { path: '/pages/:id', component: () => import('./Show.vue') },
];

export { routes };


import axios from 'axios';

// modules:
export * from './auth';
export * from './blocks';
export * from './menus';
export * from './menu-items';
export * from './menu-item-tree';
export * from './pages';
export * from './page-tree';
export * from './partials';

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    timeout: 5000,
    withCredentials: true,
    headers: { Accept: 'application/json' },
});

export { client };

import axios from 'axios';

export * from './types';

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    timeout: 5000,
    withCredentials: true,
    headers: { Accept: 'application/json' },
});

export { client };

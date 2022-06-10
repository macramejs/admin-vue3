import axios from 'axios';

// modules:
export * from './auth';

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    timeout: 5000,
    withCredentials: true,
    headers: { Accept: 'application/json' }
});

export { client };
import { client } from './index';
import { LoginForm } from '@admin/types/forms';
import { UserResource } from '@admin/types/resources';

async function login(payload: LoginForm) {
    await client.get('sanctum/csrf-cookie',{ baseURL: import.meta.env.VITE_APP_URL as string })
    await client.post('/login', payload, { baseURL: import.meta.env.VITE_APP_URL as string });
}

async function logout() {
    return await client.post('/logout', {}, { baseURL: import.meta.env.VITE_APP_URL as string });
}

async function loadUser(): Promise<UserResource> {
    const { data } = await client.get('user');
    return data
}

export { login, logout, loadUser };
import { client } from './index';
import { LoginFormData } from '@/types/forms';
import { UserResource } from '@/types/resources';
import { AxiosResponse } from 'axios';

async function login(payload: LoginFormData) : Promise<AxiosResponse> {
    await client.get('sanctum/csrf-cookie',{ baseURL: import.meta.env.VITE_APP_URL as string })
    return await client.post('/login', payload, { baseURL: import.meta.env.VITE_APP_URL as string })
}

async function logout() {
    return await client.post('/logout', {}, { baseURL: import.meta.env.VITE_APP_URL as string });
}

async function loadUser(): Promise<UserResource> {
    const { data } = await client.get('user');
    return data
}

export { login, logout, loadUser };
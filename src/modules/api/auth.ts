import { client } from './index';
import { ForgotFormData, LoginFormData, ResetFormData } from '@/types/forms';
import { User } from '@/types/resources';
import { AxiosResponse } from 'axios';

async function login(payload: LoginFormData): Promise<AxiosResponse> {
    await client.get('sanctum/csrf-cookie', {
        baseURL: import.meta.env.VITE_APP_URL as string,
    });
    return await client.post('/admin/login', payload, {
        baseURL: import.meta.env.VITE_APP_URL as string,
    });
}

async function logout() {
    return await client.post('/logout');
}
async function forgot(payload: ForgotFormData): Promise<AxiosResponse> {
    return await client.post('/forgot', payload, {
        baseURL: import.meta.env.VITE_APP_URL as string,
    });
}

async function resetPassword(payload: ResetFormData): Promise<AxiosResponse> {
    return await client.post('/reset', payload, {
        baseURL: import.meta.env.VITE_APP_URL as string,
    });
}

async function loadUser(): Promise<User> {
    const { data } = await client.get('user');
    return data;
}

export { login, logout, forgot, resetPassword, loadUser };

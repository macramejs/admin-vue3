import { client, Create, LoadOne, Update } from '@/modules/api';
import { ForgotFormData, LoginFormData, ResetFormData } from '@/types/forms';
import { User, UserResource } from '@/types/resources';
import { AxiosResponse } from 'axios';

const login: Create<LoginFormData> = data =>
    client
        .get('sanctum/csrf-cookie', {
            baseURL: import.meta.env.VITE_APP_URL as string,
        })
        .then(() =>
            client.post('/admin/login', data, {
                baseURL: import.meta.env.VITE_APP_URL as string,
            })
        );

const logout: () => Promise<AxiosResponse> = () => client.post('/logout');

const forgot: Create<ForgotFormData> = data =>
    client.post('/forgot', data, {
        baseURL: import.meta.env.VITE_APP_URL as string,
    });

const resetPassword: Update<ResetFormData> = data =>
    client.post('/reset', data, {
        baseURL: import.meta.env.VITE_APP_URL as string,
    });

const loadUser: LoadOne<UserResource> = () => client.get('user');

export { login, logout, forgot, resetPassword, loadUser };

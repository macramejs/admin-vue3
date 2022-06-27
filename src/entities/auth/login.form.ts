import { useForm } from '@macramejs/macrame-vue3';
import {
    LoginFormData,
    LoginForm,
    ForgotFormData,
    ForgotForm,
    ResetFormData,
    ResetForm,
} from '@/types/forms';
import { useRouter } from 'vue-router';
import { login, loadUser, forgot, resetPassword } from './api';
import { authedUser } from './auth-user.state';
import { isAuthenticated } from './is-authenticated.state';

export type UseLoginForm = (data: Partial<LoginFormData>) => LoginForm;

const useLoginForm: UseLoginForm = ({
    email = '',
    password = '',
    remember = false,
}) => {
    const router = useRouter();

    const form = useForm<LoginFormData>({
        data: { email, password, remember },
        submit: data =>
            login(data).then(response => {
                isAuthenticated.value = true;

                authedUser.load().then(() => {
                    router.push('/');
                });

                return response;
            }),
    });

    return form;
};

export { useLoginForm };

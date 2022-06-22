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
import { login, loadUser, forgot, resetPassword } from '@/modules/api';
import { isAuthenticated, authedUser } from '../auth';

export type UseLoginForm = (data: Partial<LoginFormData>) => LoginForm;

const useLoginForm: UseLoginForm = ({
    email = '',
    password = '',
    remember = false,
}) => {
    const router = useRouter();

    const form = useForm<LoginFormData>({
        data: { email, password, remember },
        submit: data => {
            const result = login(data);
            isAuthenticated.value = true;
            result.then(() => {
                loadUser().then(response => {
                    authedUser.value = response;
                    router.push('/');
                });
            });

            return result;
        },
    });

    return form;
};

export type UseForgotForm = (data: Partial<ForgotFormData>) => ForgotForm;
const useForgotForm: UseForgotForm = ({ email = '' }) => {
    const form = useForm<ForgotFormData>({
        data: { email },
        submit: data => {
            const result = forgot(data);
            return result;
        },
    });

    return form;
};

export type UseResetForm = (data: Partial<ResetFormData>) => ResetForm;
const useResetForm: UseResetForm = ({
    email = '',
    password = '',
    password_confirmation = '',
}) => {
    const form = useForm<ResetFormData>({
        data: { email, password, password_confirmation },
        submit: data => {
            const result = resetPassword(data);
            return result;
        },
    });

    return form;
};

export { useLoginForm, useForgotForm, useResetForm };

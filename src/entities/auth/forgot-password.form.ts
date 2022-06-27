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
import { isAuthenticated, authedUser } from '@/modules/state';

export type UseForgotPasswordForm = (
    data: Partial<ForgotFormData>
) => ForgotForm;

const useForgotPasswordForm: UseForgotPasswordForm = ({ email = '' }) =>
    useForm({
        data: { email },
        submit: data => forgot(data),
    });

export { useForgotPasswordForm };

import { useForm } from '@macramejs/macrame-vue3';
import { LoginFormData, LoginForm } from '@/types/forms';
import { useRouter } from 'vue-router';
import { login } from '@/modules/api';
import { isAuthenticated } from '../auth';

export type UseLoginForm = (data: Partial<LoginFormData>) => LoginForm;

const useLoginForm: UseLoginForm = ({
    email = '',
    password = '',
    remember = false,
}) => {
    const router = useRouter();

    const form = useForm<LoginFormData>({
        data: {email, password, remember},
        submit: data => {
            const result = login(data);
            isAuthenticated.value = true
            result.then(r => router.push('/'));

            return result;
        }
    });

    return form;
}

export { useLoginForm };
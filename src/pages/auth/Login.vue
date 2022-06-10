<template>
    <GuestLayout>
        <form @submit.prevent="form.submit" class="space-y-4">
            <Input
                autofocus
                :label="lang.email"
                required
                type="email"
                autocomplete="username"
                v-model="form.email"
                :errors="form.errors?.email"
            />
            <Input
                required
                type="password"
                :label="lang.password"
                autocomplete="username"
                v-model="form.password"
                :errors="form.errors?.password"
            />
            <div class="flex items-center justify-between mt-5">
                <CheckboxSwitch
                    sm
                    :label="lang.remember"
                    v-model="form.remember"
                    class="text-sm uppercase"
                />
                <Button
                    v-if="forgotPasswordRoute"
                    :href="forgotPasswordRoute"
                    text
                    class="mt-1 text-right"
                >
                    {{ lang.forgot_password }}
                </Button>
            </div>
            <div class="flex items-center justify-center mt-5">
                <Button
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    {{ lang.login }}
                </Button>
            </div>
        </form>
    </GuestLayout>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useForm } from '@macramejs/macrame-vue3';
import { CheckboxSwitch, Button } from '@macramejs/admin-vue3';
import { GuestLayout, GuestLayoutInput as Input } from '@macramejs/admin-vue3';
import { login } from '@/modules/api';
import { useRouter } from 'vue-router';

interface Lang {
    login: string;
    email: string;
    password: string;
    remember: string;
    forgot_password: string;
}

const props = defineProps({
    submitRoute: {
        type: String,
        required: true,
    },
    forgotPasswordRoute: {
        type: String,
    },
    lang: {
        type: Object as PropType<Lang>,
        default: {
            login: 'Login',
            email: 'Email',
            password: 'Password',
            remember: 'Remember Me',
            forgot_password: 'Forgot your password?',
        },
    },
});

const router = useRouter();

const form = useForm({
    route: props.submitRoute,
    data: { email: '', password: '', remember: false },
    method: 'post',
});

const submit = () => {
    login(form)
        .then(() => {
            router.push('/');
        })
        .catch(() => {
            //
        });
};
</script>

<template>
    <GuestLayout>
        <form @submit.prevent="form.submit()" class="w-1/2 space-y-4">
            <Input
                autofocus
                :label="$t('auth.email')"
                required
                type="email"
                autocomplete="username"
                v-model="form.email"
            />
            <Input
                required
                type="password"
                :label="$t('auth.password')"
                autocomplete="username"
                v-model="form.password"
            />

            <div class="flex items-center justify-between mt-5">
                <CheckboxSwitch
                    sm
                    :label="$t('auth.remember')"
                    v-model="form.remember"
                    class="text-sm uppercase"
                />
                <Button href="/forgot" text class="mt-1 text-right">
                    {{ $t('auth.forgot_password') }}
                </Button>
            </div>
            <div class="flex items-center justify-center mt-5">
                <Button>
                    {{ $t('auth.login') }}
                </Button>
            </div>
        </form>
    </GuestLayout>
</template>

<script setup lang="ts">
import { login } from '@/modules/api';
import { GuestLayout } from '@/layout';
import { CheckboxSwitch, Button, Input } from '@macramejs/admin-vue3';
import { useRouter } from 'vue-router';
import { LoginFormData, LoginForm } from '@/types/forms';
import { useForm } from '@macramejs/macrame-vue3';

const router = useRouter();

const form: LoginForm = useForm<LoginFormData>({
    data: {
        email: '',
        password: '',
        remember: false,
    },
    submit: async data => {
        try {
            await login(data);
            router.push('/');
        } catch (error) {}
    },
});
</script>

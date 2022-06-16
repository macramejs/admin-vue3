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
import { GuestLayout } from '@/layout';
import { CheckboxSwitch, Button, Input } from '@/ui';
import { useLoginForm } from '@/modules/forms';
import { LoginForm } from '@/types/forms';

const form: LoginForm = useLoginForm({});
</script>

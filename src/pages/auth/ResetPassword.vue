<template>
    <GuestLayout>
        <form @submit.prevent="form.submit">
            <Input
                autofocus
                required
                type="email"
                autocomplete="username"
                v-model="form.email"
                label="TODO"
                readonly
            />
            <Input
                required
                type="password"
                autocomplete="new-password"
                v-model="form.password"
                label="TODO"
            />
            <Input
                required
                type="password"
                autocomplete="new-password"
                v-model="form.password_confirmation"
                label="TODO"
            />
            <div class="flex justify-center mt-5">
                <Button> TODO </Button>
            </div>
        </form>
    </GuestLayout>
</template>

<script lang="ts" setup>
import { GuestLayout } from '@/layout';
import { useResetForm } from '@/modules/forms';
import { ResetForm } from '@/types';
import { Input, Button } from '@/ui';

const form: ResetForm = useResetForm({});
</script>

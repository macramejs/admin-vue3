<template>
    <GuestLayout>
        <form @submit.prevent="form.submit" class="mt-4">
            <Input
                autofocus
                required
                class=""
                label="TODO"
                type="email"
                autocomplete="username"
                v-model="form.email"
            />
            <div class="flex justify-center mt-5">
                <Button> TODO </Button>
            </div>
        </form>
    </GuestLayout>
</template>

<script lang="ts" setup>
import { Input, Button } from '@/ui';
import { ForgotForm } from '@/types';
import { useForgotPasswordForm } from '@/entities';

const form: ForgotForm = useForgotPasswordForm({});
</script>

<template>
    <GuestLayout>
        <div class="text-sm text-gray-600">{{ lang.message }}</div>
        <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
            {{ status }}
        </div>
        <form @submit.prevent="form.submit">
            <Input
                autofocus
                required
                type="email"
                autocomplete="username"
                v-model="form.email"
                :label="lang.email"
                :errors="form.errors?.email"
                readonly
            />
            <Input
                required
                type="password"
                autocomplete="new-password"
                v-model="form.password"
                :label="lang.password"
                :errors="form.errors?.password"
            />
            <Input
                required
                type="password"
                autocomplete="new-password"
                v-model="form.password_confirmation"
                :label="lang.password_confirmation"
                :errors="form.errors?.password_confirmation"
            />
            <div v-if="form.errors?.token" class="mb-4 text-red">
                {{ form.errors.token }}
            </div>
            <div class="flex justify-center mt-5">
                <Button
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    {{ lang.reset_password }}
                </Button>
            </div>
        </form>
    </GuestLayout>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { useForm } from '@macramejs/macrame-vue3';
import { 
    GuestLayout, 
    GuestLayoutInput as Input, 
    Checkbox, 
    Button 
} from '@/ui';

interface Lang {
    password: string;
    password_confirmation: string;
    email: string;
    reset_password: string;
}
const props = defineProps({
    submitRoute: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        token: {
            type: String,
            required: true,
        },
        lang: {
            type: Object as PropType<Lang>,
            default: {
                password: 'Password',
                password_confirmation: 'Repeat password',
                email: 'Email',
                reset_password: 'Reset Password',
            },
        },
        status: String,
});

const form = reactive({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    
}

</script>

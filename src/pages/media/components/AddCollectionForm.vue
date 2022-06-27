<template>
    <form @submit.prevent="form.submit">
        <Input
            v-model="form.title"
            @keyup.enter="form.submit"
            :placeholder="$t('media.enter_new_name')"
            class="!text-gray-100"
        />
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Input } from '@/ui';

// TODO @cbl
const form = ref();
</script>

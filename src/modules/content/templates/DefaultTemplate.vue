<template>
    <div class="my-6 space-y-4">
        <SelectImage v-model="pageForm.attributes.header" />
        <Input label="H1" v-model="pageForm.attributes.h1" />
    </div>
    <slot />
</template>

<script lang="ts" setup>
import { Input } from '@/ui';
import SelectImage from '@/modules/media/SelectImage.vue';

import { pageForm } from '@/entities';

const h1 = translatable<string>(
    locale as any,
    pageForm.value.attributes.h1,
    value => (pageForm.value.attributes.h1 = value)
);
</script>

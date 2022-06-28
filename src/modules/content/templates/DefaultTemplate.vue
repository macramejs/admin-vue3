<template>
    <div class="my-6 space-y-4">
        <SelectImage v-model="pageForm.attributes.header" />
        <Input label="H1" v-model="h1" />
    </div>
    <slot />
</template>

<script lang="ts" setup>
import { locale } from '@/modules/localize';
import { Input } from '@/ui';
import { translatable } from '@macramejs/macrame-vue3';
import SelectImage from '@/modules/media/SelectImage.vue';

import { pageForm } from '@/entities';

const h1 = translatable<string>(
    locale,
    pageForm.value.attributes.h1,
    value => (pageForm.value.attributes.h1 = value)
);
</script>

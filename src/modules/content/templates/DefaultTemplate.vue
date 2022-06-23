<template>
    <div class="my-6 space-y-4">
        <!-- <SelectImage v-model="form.attributes.header" /> -->
        <Input label="H1" v-model="h1" />
    </div>
    <slot />
</template>

<script lang="ts" setup>
import { locale } from '@/modules/localize';
import { Input } from '@/ui';
import { translatable } from '@macramejs/macrame-vue3';
import { PageFormData } from '@/types';
import { PropType } from 'vue';
import SelectImage from '@/modules/media/SelectImage.vue';

const props = defineProps({
    form: {
        type: Object as PropType<PageFormData>,
        required: true,
    },
});

const h1 = translatable<string>(
    locale,
    props.form.attributes.h1,
    value => (props.form.attributes.h1 = value)
);
</script>

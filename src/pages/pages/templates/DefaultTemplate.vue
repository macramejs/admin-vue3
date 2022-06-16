<template>
    <div class="my-6 space-y-4">
        <!-- <SelectImage v-model="form.attributes.header" /> -->
        <Input label="H1" v-model="h1" />
    </div>
    <slot />
</template>

<script lang="ts" setup>
import { locale } from '@/modules/localize';
import { Input } from '@macramejs/admin-vue3';
import { translatable } from '@macramejs/macrame-vue3';
import { PageContentForm } from '@/types/forms';
import { PropType } from 'vue';
// import SelectImage from '@admin/modules/content/sections/components/SelectImage.vue';

const props = defineProps({
    form: {
        type: Object as PropType<PageContentForm>,
        required: true,
    },
});

const h1 = translatable<string>(
    locale,
    props.form.attributes.h1,
    value => (props.form.attributes.h1 = value)
);
</script>

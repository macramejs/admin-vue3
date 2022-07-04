<template>
    <FormGroup>
        <SelectImage v-model="partialForm.attributes.header_image" />
        <Input label="Claim" v-model="partialForm.attributes.claim" />
    </FormGroup>
    <slot />
</template>

<script lang="ts" setup>
import { partialForm } from '@/entities';
import { Input, FormGroup } from '@/ui';
import SelectImage from '@/modules/media/SelectImage.vue';
import { locale } from '@/modules/localize';
import { translatable } from '@macramejs/macrame-vue3';

const claim = translatable<string>(
    locale as any,
    partialForm.attributes.claim,
    value => (partialForm.attributes.claim = value)
);
</script>

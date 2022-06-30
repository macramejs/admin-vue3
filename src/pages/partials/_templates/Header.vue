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
</script>

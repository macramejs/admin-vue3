<template>
    <DatePicker
        v-bind="$attrs"
        v-slot="{ inputValue, inputEvents }"
        class="relative"
        is-dark
        color="orange"
    >
        <Input
            :modelValue="inputValue"
            v-on="inputEvents"
            :errors="errors"
            :label="label"
        />
    </DatePicker>
</template>

<script lang="ts" setup>
import { DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
import Input from './Input.vue';

defineProps({
    label: {
        type: String,
        default: null,
    },
    hint: {
        type: String,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    errors: {
        type: Array,
        default: [],
    },
});
</script>

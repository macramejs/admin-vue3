<template>
    <DatePicker
        v-bind="$attrs"
        v-slot="{ inputValue, inputEvents }"
        class="relative"
        is-dark
        :mode="withTime ? 'dateTime' : 'date'"
        is24hr
        color="orange"
        :disabled="disabled"
    >
        <Input
            :modelValue="inputValue"
            v-on="inputEvents"
            :errors="errors"
            :label="label"
            :disabled="disabled"
        />
    </DatePicker>
</template>

<script lang="ts" setup>
import { DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
import Input from './Form/Input.vue';

const props = defineProps({
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
    withTime: {
        type: Boolean,
        default: false,
    },
    errors: {
        type: Array,
        default: [],
    },
});
</script>

<template>
    <textarea
        v-bind="$attrs"
        class="bg-white border w-full transition-colors duration-300 focus:outline-none placeholder:text-gray-900 h-[118px] overflow-y-scroll overflow-x-hidden rounded-[8px] px-[18px] py-3"
        :class="{
            'border-red-signal': errors.length > 0,
            'border-gray-900 focus:border-orange': errors.length == 0,
        }"
        :value="modelValue"
        @input="updateValue"
    />
</template>

<script lang="ts" setup>
const emits = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: String,
    errors: {
        type: Array,
        default: [],
    },
    hint: {
        type: String,
        default: null,
    },
});

const updateValue = event => {
    emits('update:modelValue', event.target.value);
};
</script>

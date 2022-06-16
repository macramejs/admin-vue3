<template>lock</template>

<script setup lang="ts">
const props = defineProps({
    expanded: {
        type: Boolean,
        requried: true,
    },
    modelValue: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const toggle = () => {
    emit('update:modelValue', !props.modelValue);
    localStorage.setItem('sideBarLocked', JSON.stringify(!props.modelValue));
};
</script>

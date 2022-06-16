<template>
    <div class="inline-block mb-[14px] font-semibold">
        <slot>
            {{ label }}
        </slot>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    label: {
        type: String,
    },
});
</script>

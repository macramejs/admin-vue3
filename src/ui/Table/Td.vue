<template>
    <td class="py-5 pl-6 pr-6" :class="{ slim }">
        <slot />
    </td>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        slim: {
            type: Boolean,
            default: false,
        },
    },
});
</script>

<template>
    <SidebarSecondaryHeader :title="$t('media.collections')">
        <ButtonRound white sm @click="emit('update:showForm', !showForm)">
            <IconPlus class="w-4 h-4" />
        </ButtonRound>
    </SidebarSecondaryHeader>
</template>

<script lang="ts" setup>
import { SidebarSecondaryHeader } from '@/layout';
import { ButtonRound } from '@/ui';
import IconPlus from '@/ui/Icons/IconPlus.vue';

const emit = defineEmits(['update:showForm']);

defineProps({
    showForm: {
        type: Boolean,
        required: true,
    },
});
</script>

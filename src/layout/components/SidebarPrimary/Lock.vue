<template>
    <!-- <SidebarLink
        :expanded="expanded"
        :hideTitle="!expanded"
        class="mt-auto"
        @click="toggle"
    > -->
    <!-- <template #icon> -->
    <!-- <IconLocked v-if="modelValue" class="w-4 h-4" />
            <IconUnlocked v-if="!modelValue" class="w-4 h-4" /> -->
    <!-- </template> -->
    <!-- {{ modelValue ? 'Unlock' : 'Lock' }}&nbsp;Sidebar -->
    <!-- </SidebarLink> -->

    lock
</template>

<script setup lang="ts">
// import { IconLocked, IconUnlocked } from '../../../icons';
import SidebarLink from '../../SidebarLink.vue';
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

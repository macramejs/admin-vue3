<template>
    <div
        class="flex flex-col justify-between h-screen transition-all bg-gray-900 border-r border-gray-800"
        @mouseover="expanded = true"
        @mouseleave="expanded = false"
        :class="{
            'w-[77px]': !showSidebar,
            'w-[250px] show-sidebar': showSidebar,
        }"
    >
        <header class="flex items-center justify-between h-[80px] px-4 py-7">
            <div class="relative flex items-center w-full h-10 overflow-hidden">
                <a href="/admin">
                    <div class="w-[154px]">
                        <Logo />
                    </div>
                </a>
            </div>
        </header>
        <nav class="flex flex-col flex-1">
            <slot v-bind:expanded="showSidebar" />
        </nav>
        <slot name="footer">
            <footer class="p-4 space-y-2">
                <LockSidebar v-model="locked" :expanded="showSidebar" />
            </footer>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import Logo from './Logo.vue';
import LockSidebar from './LockSidebar.vue';

const props = defineProps({
    locked: {
        type: Boolean,
        default: false,
    },
});

const expanded = ref(false);
const locked = ref<boolean>(props.locked);

const showSidebar = computed(() => {
    return expanded.value || locked.value;
});
</script>

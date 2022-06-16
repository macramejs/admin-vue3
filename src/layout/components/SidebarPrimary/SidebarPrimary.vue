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
        <Header />
        <nav class="flex flex-col flex-1 px-4">
            <slot v-bind:expanded="showSidebar" />
        </nav>
        <slot name="footer">
            <footer class="p-4 space-y-2">
                <Lock v-model="locked" :expanded="showSidebar" />
            </footer>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import Header from './Header.vue';
import Lock from './Lock.vue';

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

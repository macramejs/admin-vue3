<template>
    <TabPanel class="relative flex justify-between w-full">
        <div
            class="flex-1 px-10 overflow-y-auto"
            :style="`height: calc(100vh - ${sidebarTopPosition}px); top: ${sidebarTopPosition}px;`"
        >
            <slot />
        </div>
        <template v-if="hasSidebar">
            <div
                class="sticky flex flex-col transition-all duration-300 bg-white shadow"
                :style="`height: calc(100vh - ${sidebarTopPosition}px); top: ${sidebarTopPosition}px;`"
                :class="{
                    'w-[233px]': sidebarActive,
                    'w-[60px]': !sidebarActive,
                }"
            >
                <div class="flex-1 w-full overflow-y-auto">
                    <slot v-if="sidebarActive" name="sidebar" />
                    <div class="w-full p-4 mt-4" v-if="!sidebarActive">
                        <div class="flex items-center w-full gap-4 rotate-90">
                            <slot name="sidebarTitle" />
                        </div>
                    </div>
                </div>
                <div
                    class="flex items-center w-full px-4 py-2 mt-auto border-t border-gray-400"
                >
                    <button
                        @click="toggleSidebar()"
                        class="p-1 bg-gray-100 rounded"
                    >
                        <svg
                            width="24"
                            height="24"
                            stroke-width="1.5"
                            fill="none"
                            class="transition-transform duration-300 scale-[0.8]"
                            :class="{
                                'rotate-180': sidebarActive,
                                'rotate-0': !sidebarActive,
                            }"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.5 12H6m0 0 6-6m-6 6 6 6"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </template>
    </TabPanel>
</template>

<script lang="ts" setup>
import { TabPanel } from '@headlessui/vue';
import { ref } from 'vue';

defineProps({
    hasSidebar: {
        type: Boolean,
        default: false,
    },
    sidebarTopPosition: {
        type: String,
        default: '110',
    },
});

const sidebarActive = ref(true);

const toggleSidebar = () => {
    if (sidebarActive.value) {
        sidebarActive.value = false;
        return;
    }
    sidebarActive.value = true;
};
</script>

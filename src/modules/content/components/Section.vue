<template>
    <section>
        <div
            class="relative flex justify-between"
            :class="{ 'mb-3': collapsed }"
        >
            <div
                class="absolute w-[0%] h-full ml-2 transition-all duration-300 pl-11"
                :class="{
                    '!w-full': collapsed,
                }"
            >
                <div class="w-full h-full bg-white rounded-sm"></div>
            </div>
            <div class="relative z-10 flex items-center">
                <InteractionButton class="mr-3 cursor-move handle">
                    <IconDraggable class="w-2.5 h-2.5 fill-gray-700" />
                </InteractionButton>

                <div @click="collapsed = !collapsed" class="cursor-pointer">
                    <slot name="title">
                        <span class="text-lg font-medium"> {{ title }} </span>
                    </slot>
                </div>
            </div>
            <div class="z-10 flex items-center space-x-2">
                <ContextMenu placement="left">
                    <template #button>
                        <InteractionButton class="cursor-pointer" gray>
                            <IconMoreHorizontal class="w-4 h-4" />
                        </InteractionButton>
                    </template>
                    <ContextMenuItem
                        class="hover:bg-red-signal text-red-signal"
                        @click="emit('destroy')"
                    >
                        <template #icon>
                            <IconTrash class="origin-left scale-75" />
                        </template>
                        <span>Delete</span>
                    </ContextMenuItem>
                </ContextMenu>
                <InteractionButton
                    class="cursor-pointer"
                    gray
                    @click="collapsed = !collapsed"
                >
                    <IconCaret
                        class="w-4 h-4"
                        :class="{
                            ' rotate-180': collapsed,
                        }"
                    />
                </InteractionButton>
            </div>
        </div>

        <div v-if="!collapsed" class="flex">
            <div class="flex justify-center w-8 mr-3">
                <div class="w-[1px] h-full border-r border-gray-300"></div>
            </div>
            <div class="flex-1 mt-3 mb-6">
                <slot />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import ContextMenu from './ContextMenu.vue';
import InteractionButton from './InteractionButton.vue';
import ContextMenuItem from './ContextMenuItem.vue';
import IconDraggable from '../icons/IconDraggable.vue';
import IconTrash from '../icons/IconTrash.vue';
import IconCaret from '../icons/IconCaret.vue';
import IconMoreHorizontal from '../icons/IconMoreHorizontal.vue';
import { hideSections } from './sections';

const props = defineProps({
    title: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(['destroy']);

const collapsed = ref(false);

watch(
    () => hideSections.value,
    val => {
        collapsed.value = val;
    }
);
</script>

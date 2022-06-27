<template>
    <Disclosure v-slot="{ open }" defaultOpen>
        <div class="flex items-center">
            <div class="flex items-center w-full p-4 bg-white rounded">
                <div class="px-4 cursor-move handle">
                    <IconDraggable class="w-2.5 h-2.5" />
                </div>
                <div class="text-lg font-semibold">
                    {{ menuItem.title }}
                </div>
                <div>
                    <svg
                        class="w-6 h-6 mx-3 text-gray"
                        width="24"
                        height="24"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.75 12H16.75M16.75 12L14 14.75M16.75 12L14 9.25"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <a
                    class="flex items-center space-x-2 text-gray"
                    :href="pageLink"
                >
                    {{
                        linksState.value.find(option => option.link == menuItem.link)
                            ?.title
                    }}
                    <div
                        class="w-2 h-2 ml-2 mr-4 rounded-full"
                        :class="{
                            'bg-green': menuItem.is_public,
                            'bg-red': !menuItem.is_public,
                        }"
                    ></div>
                </a>
                <div class="flex items-center justify-end flex-1">
                    <div class="mr-4">
                        <svg
                            v-if="!live || !menuItem.is_public"
                            class="w-4 h-4"
                            width="24"
                            height="24"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 3L21 21"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M10.5 10.6771C10.1888 11.0296 10 11.4928 10 12C10 13.1045 10.8954 14 12 14C12.5072 14 12.9703 13.8112 13.3229 13.5"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M7.36185 7.5611C5.68002 8.73968 4.27894 10.4188 3 12C4.88856 14.991 8.2817 18 12 18C13.5499 18 15.0434 17.4772 16.3949 16.6508"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12 6C16.0084 6 18.7015 9.1582 21 12C20.6815 12.5043 20.3203 13.0092 19.922 13.5"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>

                    <ContextMenu>
                        <template #button>
                            <ContextButton />
                        </template>
                        <AddOrEditItemModal
                            :menu-item="menuItem"
                            :menu="menuState.value"
                        >
                            <template #button="{ open }">
                                <ContextMenuItem @click="open">
                                    {{ $t('menus.edit') }}
                                </ContextMenuItem>
                            </template>
                        </AddOrEditItemModal>

                        <ContextMenuItem
                            class="hover:bg-red-signal text-red-signal"
                            @click="
                                deleteMenuItem(menuState.value, menuItem.id)
                            "
                        >
                            <template #icon>
                                <IconTrash class="origin-left scale-75" />
                            </template>
                            <span>{{ $t('menus.delete') }}</span>
                        </ContextMenuItem>
                    </ContextMenu>
                </div>
            </div>
            <div class="flex justify-center w-16 mr-16">
                <DisclosureButton
                    class="p-1 hover:bg-black rounded-xs"
                    :class="{
                        'rotate-180': !open,
                    }"
                    v-if="children?.items.length > 0"
                >
                    <IconNavArrowDown class="w-3 h-3" />
                </DisclosureButton>
            </div>
        </div>
        <DisclosurePanel class="pl-12 mt-3">
            <MenuTree :tree="children" :live="live && menuItem.is_public" />
        </DisclosurePanel>
    </Disclosure>
</template>

<script lang="ts" setup>
import { Tree } from '@macramejs/macrame-vue3';
import { MenuItem } from '@/types';
import { ContextMenu, ContextMenuItem, ContextButton } from '@/ui';
import IconTrash from '@/ui/Icons/IconTrash.vue';
import IconNavArrowDown from '@/ui/Icons/IconNavArrowDown.vue';
import IconDraggable from '@/ui/Icons/custom/IconDraggable.vue';
import { computed, PropType } from 'vue';
import AddOrEditItemModal from './AddOrEditItemModal.vue';
import MenuTree from './MenuTree.vue';
import { menuState, linksState, deleteMenuItem } from '@/entities';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const props = defineProps({
    menuItem: {
        type: Object as PropType<MenuItem>,
        required: true,
    },
    children: {
        type: Object as PropType<Tree<MenuItem>>,
        required: true,
    },
    live: {
        type: Boolean,
        default: true,
    },
});

const pageLink = computed(() => {
    let pageId = linksState.value
        .find(option => option.link == props.menuItem.link)
        ?.link.split('.')
        .pop();

    return `/admin/pages/${pageId}`;
});
</script>

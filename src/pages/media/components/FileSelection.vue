<template>
    <div class="flex items-center space-x-4">
        <div>{{ $tc('media.n_files_selected', selection.files.length) }}</div>
        <div>
            <ContextMenu>
                <template v-slot:button>
                    <InteractionButton class="cursor-pointer" gray>
                        <IconMoreHoriz class="w-4 h-4" />
                    </InteractionButton>
                </template>
                <div class="p-4">
                    <AddToCollectionModal :selection="selection" />
                </div>
            </ContextMenu>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ContextMenu, InteractionButton } from '@/ui';
import IconMoreHoriz from '@/ui/Icons/IconMoreHoriz.vue';
import AddToCollectionModal from './AddToCollectionModal.vue';
import { selection } from '../modules';
</script>

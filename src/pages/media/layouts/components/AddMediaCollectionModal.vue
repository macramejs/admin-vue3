<template>
    <ButtonRound white sm @click="isOpen = true">
        <IconPlus class="w-4 h-4" />
    </ButtonRound>
    <Modal
        v-model:open="isOpen"
        sm
        :title="$t('media.new_collection')"
        localize
    >
        <form @submit.prevent="submit()">
            <Input
                v-model="mediaCollectionForm.title"
                :placeholder="$t('media.enter_new_name')"
            />
        </form>
        <template v-slot:footer>
            <Button @click="submit()">
                {{ $t('content.confirm') }}
            </Button>
        </template>
    </Modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { mediaCollectionIndex, useMediaCollectionForm } from '@/entities';
import { Input } from '@/ui';
import { Button, ButtonRound, Modal } from '@/ui';
import IconPlus from '@/ui/Icons/IconPlus.vue';

const isOpen = ref<boolean>(false);

const mediaCollectionForm = useMediaCollectionForm({});

const submit = () => {
    mediaCollectionForm.submit().then(response => {
        // TODO: maybe push to collection page, when possible
        mediaCollectionIndex.load();
        isOpen.value = false;
    });
};
</script>

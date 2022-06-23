<template>
    <div class="flex items-baseline">
        <span class="font-semibold">{{ pageForm.name }}</span>
        <div class="ml-4 space-x-2 text-sm text-gray">
            <a :href="pageUrl" v-html="fullSlug" target="_blank" />
            <EditSlugModal />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { pageForm, pageModel } from '@/modules/forms';
import EditSlugModal from '../../components/EditSlugModal.vue';

const fullSlug = computed(() => {
    if (pageForm.full_slug) {
        let parts = pageForm?.full_slug.split('/').filter(p => p);
        parts.pop();
        return `${parts.join(' > ')} > <strong>${pageForm?.slug}</strong>`;
    }
});
const pageUrl = computed(() => {
    if (pageForm?.full_slug) {
        let parts = pageForm?.full_slug.split('/').filter(p => p);
        return `${window.location.origin}/${parts.join('/')}?preview=${
            pageForm?.preview_key
        }`;
    }
});
</script>

<template>
    <div class="flex items-baseline">
        <span class="font-semibold">{{ pageForm.name }}</span>
        <div class="ml-4 space-x-2 text-sm text-gray">
            <a :href="pageUrl" v-html="fullSlug" target="_blank" />
            <EditSlugModal :page="pageModel" v-if="pageModel" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { pageForm, pageModel } from '@/modules/forms';
import EditSlugModal from '../../components/EditSlugModal.vue';

const fullSlug = computed(() => {
    if (pageModel.value?.full_slug) {
        let parts = pageModel.value?.full_slug.split('/').filter(p => p);
        parts.pop();
        return `${parts.join(' > ')} > <strong>${
            pageModel.value?.slug
        }</strong>`;
    }
});
const pageUrl = computed(() => {
    if (pageModel.value?.full_slug) {
        let parts = pageModel.value?.full_slug.split('/').filter(p => p);
        return `${window.location.origin}/${parts.join('/')}?preview=${
            pageModel.value?.preview_key
        }`;
    }
});
</script>

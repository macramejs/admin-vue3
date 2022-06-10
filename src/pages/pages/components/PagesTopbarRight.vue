<template>
    <div class="flex items-center space-x-6">
        <PagesTopbarRightLivetime :page="page" :form="form" />

        <div class="flex items-center space-x-2">
            <SelectLocale />
        </div>

        <TopbarRight />
    </div>
</template>
<script lang="ts" setup>
// imports
import { PropType, ref, watch } from 'vue';
import PagesTopbarRightLivetime from './PagesTopbarRightLivetime.vue';
import { SelectLocale } from '@admin/modules/localize';
import TopbarRight from '@admin/layout/TopbarRight.vue';
import 'v-calendar/dist/style.css';

// types
import { Page } from '@admin/types/resources';
import { PageContentForm } from '@admin/types/forms';

const props = defineProps({
    page: {
        type: Object as PropType<Page>,
        required: true,
    },
    form: {
        type: Object as PropType<PageContentForm>,
        required: true,
    },
});
</script>
<template>
    <div class="flex items-center space-x-6">
        <!-- <PagesTopbarRightLivetime :page="page" :form="form" /> -->

        <div class="flex items-center space-x-2">
            <SelectLocale />
        </div>
    </div>
</template>
<script lang="ts" setup>
// imports
import { PropType, ref, watch } from 'vue';
import PagesTopbarRightLivetime from '../../components./layouts/components./layouts/components/PagesTopbarRightLivetime.vue';
import { SelectLocale } from '@/modules/localize';
import 'v-calendar/dist/style.css';

// types
import { Page } from '@/types/resources';
// import { PageContentForm } from '@/types/forms';

// const props = defineProps({
//     page: {
//         type: Object as PropType<Page>,
//         required: true,
//     },
//     form: {
//         type: Object as PropType<PageContentForm>,
//         required: true,
//     },
// });
</script>

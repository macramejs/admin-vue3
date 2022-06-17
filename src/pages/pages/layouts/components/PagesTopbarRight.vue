<template>
    <div class="flex items-center space-x-6">
        <PagesTopbarRightLivetime
            :page="pageModel"
            :form="pageForm"
            v-if="pageModel"
        />

        <div class="flex items-center space-x-2">
            <SelectLocale />
        </div>
    </div>
</template>
<script lang="ts" setup>
import PagesTopbarRightLivetime from './PagesTopbarRightLivetime.vue';
import { SelectLocale } from '@/modules/localize';
import { pageForm, pageModel } from '@/modules/forms';
import 'v-calendar/dist/style.css';
</script>

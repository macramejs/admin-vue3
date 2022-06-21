<template>
    <div class="grid grid-cols-2 gap-5 pb-10 mb-16 border-b border-gray-400">
        <div class="col-span-full md:col-span-1">
            <h2 class="mb-4 text-xl font-semibold">Card.vue</h2>
            <div class="flex gap-5 mb-10">
                <Card>Test</Card>
            </div>
        </div>
        <div class="col-span-full md:col-span-1">
            <CopyString value="<Card>Test</Card>" label="Template" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Card } from '@/ui';
import CopyString from '../CopyString.vue';
</script>

<template>
    <Topbar>
        <div class="font-semibold">Partials</div>
    </Topbar>
    <router-view />
</template>

<script setup lang="ts">
import { PropType, computed, watch } from 'vue';
import { Topbar } from '@/layout';
import { useRoute } from 'vue-router';

// Load Partial?
const route = useRoute();

const pageId = computed(() => {
    return route.params.partial as string;
});

watch(
    () => pageId.value,
    id => {
        console.log(id)
        // pageForm.load(id);
    },
    {
        immediate: true,
    }
);

</script>

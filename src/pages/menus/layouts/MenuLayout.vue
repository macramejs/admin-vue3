<template>
    <Topbar>
        <MenusTopbarLeft />
        <MenusTopbarRight />
    </Topbar>
    <router-view />
</template>

<script setup lang="ts">
import { PropType, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MenusTopbarRight from './components/MenusTopbarRight.vue';
import MenusTopbarLeft from './components/MenusTopbarLeft.vue';
import { Topbar } from '@/layout';
import { menu } from '@/modules/state';

const route = useRoute();

onMounted(() => {
    menu.load(route.params.menu);
});
</script>

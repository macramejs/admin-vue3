<template>
    <div class="flex w-screen h-screen max-h-screen">
        <SidebarPrimary locked>
            <Link to="/pages">
                <template v-slot:icon>
                    <IconPage class="w-4 h-4" />
                </template>
                {{ $t('layout.pages') }}
            </Link>
            <Link to="/dev">
                <template v-slot:icon>
                    <IconTestTube class="w-4 h-4" />
                </template>
                Dev
            </Link>
        </SidebarPrimary>
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import SidebarPrimary from './components/SidebarPrimary/SidebarPrimary.vue';
import Link from './components/SidebarPrimary/Link.vue';
import IconTestTube from '@/ui/icons/IconTestTube.vue';
import IconPage from '@/ui/icons/IconPage.vue';
import { onMounted } from 'vue';

onMounted(() => {
    console.log('check auth');
});
</script>

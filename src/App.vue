<template>
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Admin } from '@admin/layout';

export default defineComponent({
    components: { Admin },
    props: {
        //
    },
    setup() {
        //
    },
});
</script>

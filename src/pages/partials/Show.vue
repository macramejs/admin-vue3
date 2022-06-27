<template>
    <MainBody>
        <component :is="getComponent()" :form="form"/>
    </MainBody>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { MainBody, MainContent, MainSidebar } from '@/layout';
import { usePartialForm } from '@/entities';
import { useRoute } from 'vue-router';
import { templates } from './components/templates';
const route = useRoute();

// const form = useBlockForm({}, blockId);

const partial = computed(() => route.params.partial as string);

const getComponent = () => {
    if (!(partial.value in templates)) {
        console.error(`No template found for ${partial.value}`);
    }

    return templates[partial.value];
};
</script>
<!-- <script setup lang="ts">

// const partialFormQueueKey = `partial.${props.partial.data.id}`;

// const form = useForm<PartialContent>({
//     route: `/admin/partial/${props.partial.data.id}`,
//     method: "put",
//     data: {
//         attributes: Array.isArray(props.partial.data.attributes)
//             ? {}
//             : props.partial.data.attributes,
//     },
//     onDirty: (form) => {
//         return saveQueue.add(partialFormQueueKey, async () => form.submit());
//     },
//     onClean: () => saveQueue.remove(partialFormQueueKey),
// });

// </script> -->

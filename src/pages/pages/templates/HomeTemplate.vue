<template>
    <div class="my-6 space-y-12">
        <section>
            <h2 class="mb-5">Hervorgehobene Meldungen</h2>
        </section>

        <section>
            <h2 class="mb-5">Störer</h2>
            <SectionInfoSectionForm
                v-model="pageForm.attributes.info_section"
            />
        </section>

    </div>
</template>

<script lang="ts" setup>
import { Input, Card, Link } from '@/ui';

import { pageForm } from '@/entities';
import SectionInfoSectionForm from '@/modules/content/elements/InfoSection/SectionInfoSectionForm.vue';
import SectionTextImageForm from '@/modules/content/elements/TextImage/SectionTextImageForm.vue';
import SectionServicesForm from '@/modules/content/elements/Services/SectionServicesForm.vue';
import SectionTeaserBoxesForm from '@/modules/content/elements/TeaserBoxes/SectionTeaserBoxesForm.vue';
import { onMounted } from 'vue';

onMounted(() => {
    if (pageForm.value.attributes.foo === undefined) {
        pageForm.value.attributes.foo = {
            bar: {
                baz: 'boom',
            },
        };
    }
});
</script>

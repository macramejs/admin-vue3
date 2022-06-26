<template>
    <MainSidebarSection :title="$t('content.content')">
        <Cabinet>
            <DrawerTextFull
                :draws="SectionTextFull"
                v-if="sections.text_full"
            />
            <DrawerTextImage
                :draws="SectionTextImage"
                v-if="sections.text_image"
            />
            <DrawerInfoBox :draws="SectionInfoBox" v-if="sections.info_box" />
            <DrawerImageFull
                :draws="SectionImageFull"
                v-if="sections.image_full"
            />
        </Cabinet>
    </MainSidebarSection>
    <MainSidebarSection :title="$t('content.image_galleries')">
        <Cabinet>
            <DrawerGridGallery
                :draws="SectionGridGallery"
                v-if="sections.grid_gallery"
            />
            <DrawerImageCarousel
                :draws="SectionImageCarousel"
                v-if="sections.image_carousel"
            />
        </Cabinet>
    </MainSidebarSection>
    <MainSidebarSection :title="$t('content.sections')">
        <Cabinet>
            <DrawerCards :draws="SectionCards" v-if="sections.cards" />
            <DrawerLogoWall
                :draws="SectionLogoWall"
                v-if="sections.logo_wall"
            />
            <DrawerAccordion
                :draws="SectionAccordion"
                v-if="sections.accordion"
            />
        </Cabinet>
    </MainSidebarSection>
    <MainSidebarSection :title="$t('content.blocks')">
        <Cabinet>
            <DrawerBlock :draws="SectionBlock" v-if="sections.block" />
        </Cabinet>
    </MainSidebarSection>
</template>

<script lang="ts" setup>
import { MainSidebarSection } from '@/layout';
import { Cabinet } from '@macramejs/macrame-vue3';

import {
    SectionTextFull,
    SectionImageCarousel,
    SectionTextImage,
    SectionInfoBox,
    SectionImageFull,
    SectionGridGallery,
    SectionCards,
    SectionAccordion,
    SectionLogoWall,
    SectionBlock,
} from './index';
import {
    DrawerTextFull,
    DrawerImageCarousel,
    DrawerTextImage,
    DrawerInfoBox,
    DrawerImageFull,
    DrawerGridGallery,
    DrawerCards,
    DrawerAccordion,
    DrawerLogoWall,
    DrawerBlock,
} from './index';

defineProps({
    sections: {
        type: Object,
        required: true,
    },
});
</script>

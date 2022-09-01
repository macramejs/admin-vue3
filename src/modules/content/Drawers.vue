<template>
    <MainSidebarSection :title="$t('content.content')">
        <Cabinet>
            <DrawerH2 :draws="SectionH2" />
            <DrawerTextFull :draws="SectionTextFull" />
            <DrawerTextImage :draws="SectionTextImage" />
            <DrawerInfoBox :draws="SectionInfoBox" />
            <DrawerInfoBoxLoud :draws="SectionInfoBoxLoud" />
            <DrawerCTA :draws="SectionCTA" />
            <DrawerImageSmall :draws="SectionImageSmall" />
            <DrawerImageFull :draws="SectionImageFull" />
            <DrawerVideoEmbed :draws="SectionVideoEmbed" />
            <DrawerTeaserBoxes :draws="SectionTeaserBoxes" />
            <DrawerTeaserBoxesIcon :draws="SectionTeaserBoxesIcon" />
            <DrawerContactPeople :draws="SectionContactPeople" />
            <DrawerInfoSection :draws="SectionInfoSection" />
        </Cabinet>
    </MainSidebarSection>
    <MainSidebarSection :title="$t('content.image_galleries')">
        <Cabinet>
            <DrawerGridGallery :draws="SectionGridGallery" />
            <!-- <DrawerImageCarousel :draws="SectionImageCarousel" /> -->
        </Cabinet>
    </MainSidebarSection>
    <MainSidebarSection :title="$t('content.sections')">
        <Cabinet>
            <DrawerCards :draws="SectionCards" />
            <DrawerLogoWall :draws="SectionLogoWall" />
            <DrawerAccordion :draws="SectionAccordion" />
        </Cabinet>
    </MainSidebarSection>
    <MainSidebarSection :title="$t('content.reusables')">
        <Cabinet>
            <DrawerBlock :draws="SectionBlock" />
            <DrawerForm :draws="SectionForm" />
        </Cabinet>
    </MainSidebarSection>
</template>

<script lang="ts" setup>
import { MainSidebarSection } from '@/layout';
import Cabinet from './Cabinet.vue';

import {
    SectionH2,
    SectionTextFull,
    SectionContactPeople,
    SectionTextImage,
    SectionInfoBox,
    SectionInfoBoxLoud,
    SectionCTA,
    SectionInfoSection,
    SectionImageSmall,
    SectionImageFull,
    SectionVideoEmbed,
    SectionGridGallery,
    SectionCards,
    SectionTeaserBoxes,
    SectionTeaserBoxesIcon,
    SectionAccordion,
    SectionLogoWall,
    SectionBlock,
    SectionForm,
} from './index';
import {
    DrawerTextFull,
    DrawerImageCarousel,
    DrawerTextImage,
    DrawerContactPeople,
    DrawerInfoBox,
    DrawerInfoBoxLoud,
    DrawerCTA,
    DrawerInfoSection,
    DrawerImageSmall,
    DrawerImageFull,
    DrawerVideoEmbed,
    DrawerGridGallery,
    DrawerCards,
    DrawerTeaserBoxes,
    DrawerTeaserBoxesIcon,
    DrawerAccordion,
    DrawerLogoWall,
    DrawerBlock,
    DrawerForm,
} from './index';
import DrawerH2 from './elements/H2/DrawerH2.vue';
</script>

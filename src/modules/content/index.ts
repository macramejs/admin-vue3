import { ref } from 'vue';

export const hideSections = ref<boolean>(false);

export { default as Content } from './Content.vue';
export { default as Drawers } from './Drawers.vue';

export * from './elements';

import SectionTextFull from './elements/TextFull/SectionTextFull.vue';
import SectionTextImage from './elements/TextImage/SectionTextImage.vue';
import SectionInfoBox from './elements/InfoBox/SectionInfoBox.vue';
import SectionImageFull from './elements/ImageFull/SectionImageFull.vue';
import SectionGridGallery from './elements/GridGallery/SectionGridGallery.vue';
import SectionCards from './elements/Cards/SectionCards.vue';
import SectionAccordion from './elements/Accordion/SectionAccordion.vue';
import SectionLogoWall from './elements/LogoWall/SectionLogoWall.vue';
import SectionImageCarousel from './elements/ImageCarousel/SectionImageCarousel.vue';
import SectionBlock from './elements/Block/SectionBlock.vue';

const sections = {
    text_full: SectionTextFull,
    image_full: SectionImageFull,
    image_carousel: SectionImageCarousel,
    grid_gallery: SectionGridGallery,
    info_box: SectionInfoBox,
    cards: SectionCards,
    text_image: SectionTextImage,
    accordion: SectionAccordion,
    logo_wall: SectionLogoWall,
    block: SectionBlock,
};

export { sections };

import { ref } from 'vue';

export const hideSections = ref<boolean>(false);

export { default as Content } from './Content.vue';
export { default as Drawers } from './Drawers.vue';

export * from './elements';

import SectionTextFull from './elements/TextFull/SectionTextFull.vue';
import SectionTextImage from './elements/TextImage/SectionTextImage.vue';
import SectionInfoBox from './elements/InfoBox/SectionInfoBox.vue';
import SectionInfoBoxLoud from './elements/InfoBoxLoud/SectionInfoBoxLoud.vue';
import SectionCTA from './elements/CTA/SectionCTA.vue';
import SectionInfoSection from './elements/InfoSection/SectionInfoSection.vue';
import SectionServices from './elements/Services/SectionServices.vue';
import SectionImageSmall from './elements/ImageSmall/SectionImageSmall.vue';
import SectionImageFull from './elements/ImageFull/SectionImageFull.vue';
import SectionVideoEmbed from './elements/VideoEmbed/SectionVideoEmbed.vue';
import SectionGridGallery from './elements/GridGallery/SectionGridGallery.vue';
import SectionCards from './elements/Cards/SectionCards.vue';
import SectionCompanyCards from './elements/CompanyCards/SectionCompanyCards.vue';
import SectionAccordion from './elements/Accordion/SectionAccordion.vue';
import SectionTeaserBoxes from './elements/TeaserBoxes/SectionTeaserBoxes.vue';
import SectionTeaserBoxesIcon from './elements/TeaserBoxesIcon/SectionTeaserBoxesIcon.vue';
import SectionLogoWall from './elements/LogoWall/SectionLogoWall.vue';
import SectionImageCarousel from './elements/ImageCarousel/SectionImageCarousel.vue';
import SectionBlock from './elements/Block/SectionBlock.vue';
import SectionContactPeople from './elements/ContactPeople/SectionContactPeople.vue';
import SectionHeadquarters from './elements/Headquarters/SectionHeadquarters.vue';
import { SectionH2 } from './elements';

import SectionForm from './elements/Form/SectionForm.vue';
const sections = {
    h2: SectionH2,
    text_full: SectionTextFull,
    image_small: SectionImageSmall,
    image_full: SectionImageFull,
    image_carousel: SectionImageCarousel,
    video_embed: SectionVideoEmbed,
    grid_gallery: SectionGridGallery,
    contact_people: SectionContactPeople,
    info_box: SectionInfoBox,
    info_box_loud: SectionInfoBoxLoud,
    cta: SectionCTA,
    info_section: SectionInfoSection,
    headquarters: SectionHeadquarters,
    cards: SectionCards,
    services: SectionServices,
    company_cards: SectionCompanyCards,
    teaser_boxes: SectionTeaserBoxes,
    teaser_boxes_icon: SectionTeaserBoxesIcon,
    text_image: SectionTextImage,
    accordion: SectionAccordion,
    logo_wall: SectionLogoWall,
    block: SectionBlock,
    form: SectionForm,
};

export { sections };

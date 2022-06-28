<template>
    <BaseSection>
        <template v-slot:title>
            <DrawerTextImage preview />
        </template>
        <Card>
            <div class="grid grid-cols-2 gap-5">
                <div class="col-span-1">
                    <FormFieldLabel> Text </FormFieldLabel>
                    <FormGroup>
                        <Textarea v-model="model.text" label="foo" />
                    </FormGroup>
                </div>

                <div class="col-span-1">
                    <FormFieldLabel> Bild </FormFieldLabel>
                    <FormGroup>
                        <SelectImage v-model="model.image" />
                        <template v-if="model.image?.id">
                            <Input v-model="title" label="title" />
                            <Input v-model="alt" label="alt" />
                        </template>
                    </FormGroup>
                </div>
            </div>
        </Card>
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../../components/BaseSection.vue';
import { Textarea, FormFieldLabel, Card, Input } from '@/ui';
import { watch, reactive } from 'vue';
import { translatable } from '@macramejs/macrame-vue3';
import { locale } from '@/modules/localize';
import DrawerTextImage from '././DrawerTextImage.vue';
import SelectImage from '@/modules/media/SelectImage.vue';
import FormGroup from '@/ui/Form/FormGroup.vue';
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            text: '',
            image: {
                id: null,
                title: '',
                alt: '',
            },
        }),
    },
});

const model = reactive(props.modelValue);

const title = translatable<string>(
    locale,
    model.image.title,
    value => (model.image.title = value)
);

const alt = translatable<string>(
    locale,
    model.image.alt,
    value => (model.image.alt = value)
);

watch(
    () => model,
    () => emit('update:modelValue', model),
    { deep: true }
);
</script>

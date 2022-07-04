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
                            <Input v-model="model.image.title" label="title" />
                            <Input v-model="model.image.alt" label="alt" />
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

// TODO: fix any
const title = translatable<string>(
    locale as any,
    model.image.title,
    value => (model.image.title = value)
);

// TODO: fix any
const alt = translatable<string>(
    locale as any,
    model.image.alt,
    value => (model.image.alt = value)
);

watch(
    () => model,
    () => emit('update:modelValue', model),
    { deep: true }
);
</script>

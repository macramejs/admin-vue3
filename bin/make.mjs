//requiring path and fs modules
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { exit } from 'process';
import child_process from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = dir => path.join(__dirname, dir);

let arg = process.argv.pop();

if (arg.includes('/')) {
    console.error('Please provide a valid name for your content.');
    exit();
}

function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

let name = capitalize(arg);

let dir = directoryPath('../src/modules/content/elements/' + name);

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

let drawerPath = path.join(dir, `Drawer${name}.vue`);
let sectionPath = path.join(dir, `Section${name}.vue`);

fs.writeFile(
    drawerPath,
    `<template>
<Drawer title="${name}" hint="${name}" color="orange">
    <!-- ${name} Icon here -->
</Drawer>
</template>
<script lang="ts" setup>
import Drawer from '../../components/BaseDrawer.vue';
</script>`,
    function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('The file was saved!');
    }
);
fs.writeFile(
    sectionPath,
    `<template>
    <BaseSection>
        <template v-slot:title>
            <Drawer${name} preview />
        </template>
        <Card>
            <Wysiwyg v-model="text" class="w-full" :key="locale" />
        </Card>
    </BaseSection>
</template>
<script setup lang="ts">
import BaseSection from '../../components/BaseSection.vue';
import { Wysiwyg, Card } from '@/ui';
import { translatable } from '@macramejs/macrame-vue3';
import { locale } from '@/modules/localize';
import Drawer${name} from './Drawer${name}.vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Object,
        required: true,
        default: () => ({
            text: '',
        }),
    },
});

const text = translatable<string>(locale, props.modelValue.text, value =>
    emit('update:modelValue', { text: value })
);
</script>`,
    function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('The file was saved!');
    }
);

child_process.fork('bin/exports.mjs');

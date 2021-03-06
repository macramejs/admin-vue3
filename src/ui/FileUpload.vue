<template>
    <div class="w-full">
        <div
            class="flex items-center justify-center w-full transition-colors duration-300 border rounded cursor-pointer bg-gray-transparent focus:outline-none focus:border-orange aspect-square max-h-96"
            :class="{
                'border-red-signal': fileRejections.length > 0 || isDragReject,
                'border-green': isDragAccept,
                '!cursor-not-allowed': disabled,
                'border-gray-200':
                    !isDragReject &&
                    !isDragAccept &&
                    fileRejections.length == 0,
            }"
            v-bind="(getRootProps() as any)"
        >
            <input v-bind="(getInputProps() as any)" />
            <div class="flex flex-col items-center justify-center">
                <div class="text-orange">
                    <IconAddMediaImage class="w-4 h-4" />
                </div>
                <div class="text-sm text-center uppercase" v-if="busy">
                    {{ $t('ui.loading') }}
                </div>
                <div
                    class="text-sm text-center uppercase"
                    v-if="!busy && isDragActive"
                >
                    {{ $t('ui.drop_here') }}
                </div>
                <div
                    class="text-sm text-center uppercase"
                    v-if="!busy && !isDragActive"
                    v-html="$t('ui.drag_and_drop')"
                ></div>
            </div>
        </div>
    </div>
    <div class="ml-[18px]" v-if="fileRejections.length > 0">
        <span
            v-for="error in errors"
            class="inline-block mt-1 text-xs text-red-signal"
        >
            {{ error.message }}
        </span>
    </div>
</template>

<script lang="ts" setup>
import IconAddMediaImage from './Icons/IconAddMediaImage.vue';
import { ref, computed } from 'vue';
import { useDropzone } from 'vue3-dropzone';
import { client } from '@/modules/api';
const props = defineProps({
    modelValue: Array,
    accept: {
        type: [Array, String],
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    maxSize: {
        type: Number,
        default: 10,
    },
    maxFiles: {
        type: Number,
        default: 1,
    },
    url: {
        type: String,
        required: true,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['success', 'failed']);

const busy = ref(false);

const saveFiles = (files: any) => {
    busy.value = true;
    const formData = new FormData(); // pass data as a form
    for (var x = 0; x < files.length; x++) {
        // append files as array to the form, feel free to change the array name
        formData.append('files[]', files[x]);
    }

    // post the formData to your backend where storage is processed. In the backend, you will need to loop through the array and save each file through the loop.
    client
        .post(props.url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.info(response.data);
            busy.value = false;
            if (response.status >= 200 && response.status < 300) {
                emit('success');
            }
        })
        .catch(err => {
            const error = new Error(err);
            console.error(error);
            busy.value = false;
            emit('failed', error);
        });
};

function onDrop(acceptFiles: any, rejectReasons: any) {
    if (rejectReasons.length == 0) {
        saveFiles(acceptFiles);
    }
}

const maxSize = computed(() => {
    return props.maxSize * (1024 * 1024);
});

const {
    getRootProps,
    getInputProps,
    fileRejections,
    isDragActive,
    isDragAccept,
    isDragReject,
} = useDropzone({
    onDrop,
    accept: props.accept as any,
    disabled: props.disabled,
    maxSize: maxSize.value,
    multiple: props.multiple,
    maxFiles: props.maxFiles,
});

const errors = computed(() => {
    return fileRejections.value[0].errors as any;
});
</script>

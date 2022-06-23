<template>
    <div
        class="flex items-center px-1 space-x-5 cursor-pointer"
        @click="toggle()"
    >
        <div class="">
            <div
                class="w-10 p-1 text-gray-900 rounded-full bg-orange"
                :class="{
                    ' bg-opacity-100': modelValue,
                    ' bg-opacity-20': !modelValue,
                }"
            >
                <div
                    class="flex items-center justify-center w-4 h-4 transition-all duration-300 bg-white rounded-full"
                    :class="{
                        'ml-4': modelValue,
                        'ml-0': !modelValue,
                    }"
                >
                    <div v-if="modelValue" class="">
                        <IconLock class="w-3 h-3" />
                    </div>
                    <div v-if="!modelValue">
                        <IconNoLock class="w-3 h-3" />
                    </div>
                </div>
            </div>
        </div>
        <div
            class="flex items-center h-6 text-sm text-white uppercase"
            v-if="expanded"
        >
            <span v-if="modelValue"> locked </span>
            <span v-if="!modelValue"> unlocked </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconLock from '@/ui/Icons/IconLock.vue';
import IconNoLock from '@/ui/Icons/IconNoLock.vue';
const props = defineProps({
    expanded: {
        type: Boolean,
        requried: true,
    },
    modelValue: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const toggle = () => {
    emit('update:modelValue', !props.modelValue);
    localStorage.setItem('sideBarLocked', JSON.stringify(!props.modelValue));
};
</script>

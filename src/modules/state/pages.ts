import { useOriginal, useTree } from '@macramejs/macrame-vue3';
import { reactive, ref, watch } from 'vue';
import { loadPagesTree } from '../api';

export const pageTree = ref();

export const usePageTree = () => {
    let tree = reactive({
        load() {
            loadPagesTree().then(response => {
                pageTree.value = useTree(response.data.data);
            });
        },
    });

    return tree;
};

watch(
    () => pageTree.value,
    val => {
        console.log(val);
    },
    {
        immediate: true,
        deep: true,
    }
);

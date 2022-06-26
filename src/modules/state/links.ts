import { Link } from '@/types';
import { AxiosResponse } from 'axios';
import { reactive, ref } from 'vue';
import { loadLinks } from '../api';

const links = reactive({
    value: [] as Link[],
    __loaded: false,
    async load() {
        return loadLinks().then(response => {
            this.value = response.data.data;

            this.__loaded = true;
    
            return new Promise(() => response);
        });
    },
    loadIfNotLoaded() {
        if(!this.__loaded) this.load();
    }
});

export { links }

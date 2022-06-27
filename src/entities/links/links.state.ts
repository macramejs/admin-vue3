import { Link } from '@/types';
import { useState } from '@macramejs/macrame-vue3';
import { reactive } from 'vue';
import { loadLinks } from './api';

export const links = useState<Link[]>([], {
    load: () => loadLinks(),
});

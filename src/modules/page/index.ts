import { Page } from '@/types/resources';

import {deletePage as apiDeletePage} from '@/modules/api/';

export const deletePage = async (page: Page) => {
    if (confirm(`Are you sure you want to delete Page ${page.name}?`)) {
        apiDeletePage(page);
    }
};

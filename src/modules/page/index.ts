import { Page } from '@/types/resources';

import { deletePage as apiDeletePage, loadPagesTree } from '@/modules/api/';
import { usePageTree } from '../state';

export const deletePage = async (page: Page) => {
    if (confirm(`Are you sure you want to delete Page ${page.name}?`)) {
        await apiDeletePage(page);
        usePageTree().load();
    }
};

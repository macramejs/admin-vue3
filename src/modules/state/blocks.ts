import { Block } from '@/types';
import { useState } from '@macramejs/macrame-vue3';

import { loadBlock, loadBlocks } from '../api';

const blocksState = useState<Block[]>(undefined, {
    load: () => loadBlocks(),
});

const blockState = useState<Block, [number]>(undefined, {
    load: id => loadBlock(id),
});

export { blocksState, blockState };

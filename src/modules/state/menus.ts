import { Menu, MenuItem, MenuItemTreeResource } from '@/types';
import { Tree, useState, useTree } from '@macramejs/macrame-vue3';
import { reactive, Ref, ref } from 'vue';
import {
    loadMenu,
    loadMenuItemTree,
    loadMenus,
    updateMenuItemTree,
} from '../api';

const menusState = useState<Menu[]>(undefined, {
    load: () => loadMenus(),
});

const menuState = useState<Menu, [number]>(undefined, {
    load: id => loadMenu(id),
});

export type UseMenuItemTree = (
    menu: Menu
) => Tree<MenuItem, MenuItemTreeResource>;

const useMenuItemTree: UseMenuItemTree = (menu: Menu) => {
    const tree = useTree<MenuItem>({
        load: () => loadMenuItemTree(menu),
    });

    return tree;
};

const menuItemTree = ref() as Ref<Tree<MenuItem, MenuItemTreeResource>>;

export { menusState, menuState, useMenuItemTree, menuItemTree };

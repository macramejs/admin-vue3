import { Menu, MenuItem, MenuItemTreeResource } from "@/types";
import { Tree, useTree } from "@macramejs/macrame-vue3";
import { reactive } from "vue";
import { loadMenu, loadMenus, updateMenuItemTree } from "../api";

const menus = reactive({
    value: [] as Menu[],
    isBusy: false,
    async load() {
        this.isBusy = true;

        return loadMenus()
            .then(response => {
                this.value = response.data.data;
        
                return new Promise(() => response);
            }).finally(() => {
                this.isBusy = false;
            });
    }
});

const menu = reactive<{value: Menu} & any>({
    value: null,
    isBusy: false,
    async load(id: number) {
        this.isBusy = true;

        return loadMenu(id)
            .then(response => {
                this.value = response.data.data;
        
                return new Promise(() => response);
            }).finally(() => {
                this.isBusy = false;
            });
    }
});

export type UseMenuItemTree = (menu: Menu) => Tree<MenuItem, MenuItemTreeResource>;

const useMenuItemTree: UseMenuItemTree = (menu: Menu) => {
    const tree = useTree<MenuItem>({
        load: () => loadMenuItemsTree(menu)
    });

    return tree;
};

export { menus, menu, useMenuItemTree };
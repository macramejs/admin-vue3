import { useForm } from '@macramejs/macrame-vue3';
import {
    Menu,
    MenuForm,
    MenuFormData,
    MenuItemForm,
    MenuItemFormData,
} from '@/types';
import { updateOrCreateMenuItem, updateOrCreateMenu } from '../api';
import { menuItemTree, menusState } from '../state';

export type UseMenuForm = (
    data: Partial<MenuFormData> & { id?: number }
) => MenuForm;

const useMenuForm: UseMenuForm = ({
    title = '',
    type = '',
    id = undefined,
}) => {
    const form = useForm({
        data: { title, type },
        submit: data =>
            updateOrCreateMenu(data, id).then(response => {
                menusState.load();

                return response;
            }),
    });

    return form;
};

export type UseMenuItemForm = (
    menu: Menu,
    data: Partial<MenuItemFormData> & { id?: number }
) => MenuItemForm;

const useMenuItemForm: UseMenuItemForm = (
    menu,
    { title = '', link = '', id = undefined }
) => {
    const form = useForm({
        data: { title, link },
        submit: data =>
            updateOrCreateMenuItem(menu, data, id).then(response => {
                menuItemTree.value.load();

                return response;
            }),
    });

    return form;
};

export { useMenuItemForm, useMenuForm };

import { useForm } from '@macramejs/macrame-vue3';
import { Menu, MenuItemForm, MenuItemFormData } from '@/types';
import { updateOrCreateMenuItem } from '../api';

export type UseMenuItemForm = (menu: Menu, data: Partial<MenuItemFormData> & {id?: number}) => MenuItemForm;

const useMenuItemForm: UseMenuItemForm = (menu, {
    title = "",
    link = "",
    id = undefined
}) => {
    const form = useForm({
        data: { title, link },
        submit: (data) => updateOrCreateMenuItem(menu, data, id),
    });

    return form;
};


export { useMenuItemForm };
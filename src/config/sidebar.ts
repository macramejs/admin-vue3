import { SidebarSection } from '@/layout/types';
import IconPage from '@/ui/Icons/IconPage.vue';
import IconMediaImageFolder from '@/ui/Icons/IconMediaImageFolder.vue';
import IconList from '@/ui/Icons/IconList.vue';
import IconReportColumns from '@/ui/Icons/IconReportColumns.vue';
import IconLayoutLeft from '@/ui/Icons/IconLayoutLeft.vue';
import { isAdmin } from '@/entities';
import { useI18n } from 'vue-i18n';

const useSidebarPrimarySections: () => SidebarSection[] = () => {
    const { t } = useI18n();

    return [
        {
            title: `CMS`,
            items: [
                {
                    title: t('layout.pages'),
                    to: '/pages',
                    icon: IconPage,
                    show: true,
                },
                {
                    title: t('layout.media'),
                    to: '/media',
                    icon: IconMediaImageFolder,
                    show: true,
                },
                {
                    title: t('layout.navigations'),
                    to: '/menus',
                    icon: IconList,
                    show: true,
                },
                {
                    title: t('layout.blocks'),
                    to: '/blocks',
                    icon: IconReportColumns,
                    show: true,
                },
                {
                    title: t('layout.sections'),
                    to: '/partials',
                    icon: IconLayoutLeft,
                    show: isAdmin.value,
                },
            ],
        },
        {
            title: 'Crud',
            items: [
                //
            ],
        },
    ];
};

export default { useSidebarPrimarySections };

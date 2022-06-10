// import { IconList } from '@macramejs/admin-vue3';
// import { IconPages } from '@macramejs/admin-vue3';
// import { IconMediaImageFolder } from '@macramejs/admin-vue3';
// import { IconDashboard } from '@macramejs/admin-vue3';

import { RouterLinkProps } from "vue-router";

type SidebarNavigationLink = {
    title: string;
    href?: string;
    icon?: string;
    link?: RouterLinkProps
};

export const sidebarLinks = <(SidebarNavigationLink)[]>[
    {
        title: 'Dashboard',
        link: { to: '/' }
        // icon: IconDashboard,
    },
];

// Media links
sidebarLinks.push({
    title: "Medien",
    link: { to: '/media' }
    // icon: IconMediaImageFolder,
}); 

// Pages links
sidebarLinks.push({
    title: "Seiten",
    link: { to: '/pages' }
    // icon: IconPages
}); 

// Navigation links
sidebarLinks.push({
    title: "Navigation",
    href: "/admin/nav",
    // icon: IconList,
}); 
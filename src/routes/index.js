const routes = [
    {
        path: '/',
        name: 'HomePage',
        components: {
            default: () => import('../pages/HomePage.vue'),
            Header: () => import('../components/Header.vue'),
            Footer: () => import('../components/Footer.vue'),
        },
    },
    {
        path: '/about',
        name: 'AboutPage',
        components: {
            default: () => import('../pages/AboutPage.vue'),
            Header: () => import('../components/Header.vue'),
            Footer: () => import('../components/Footer.vue'),
        },
    },
    {
        path: '/contact',
        name: 'ContactPage',
        components: {
            default: () => import('../pages/ContactPage.vue'),
            Header: () => import('../components/Header.vue'),
            Footer: () => import('../components/Footer.vue'),
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        components: {
            default: () => import('../pages/PageNotFound.vue'),
            Header: () => import('../components/Header.vue'),
            Footer: () => import('../components/Footer.vue'),
        },
    },
];

export default routes;

import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    },
];

export default routes;

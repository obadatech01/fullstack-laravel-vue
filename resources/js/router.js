import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import firstPage from './components/pages/myFirstVuePage.vue';
import newRoutePage from './components/pages/newRoutePage.vue';
import hooks from './components/pages/basic/hooks.vue';
import usecom from './vuex/usecom.vue';

// admin project pages
import home from './components/pages/home.vue';
import tags from './admin/pages/tags.vue';
import category from './admin/pages/category.vue';
import adminusers from './admin/pages/adminusers.vue';
import login from './admin/pages/login.vue';
import role from './admin/pages/role.vue';
import assignRole from './admin/pages/assignRole.vue';
import createBlog from './admin/pages/createBlog.vue';

const routes = [

    // admin project routes ....

    {
        path: '/',
        component: home,
        name: 'home',
    },
    {
        path: '/tags',
        component: tags,
        name: 'tags',
    },
    {
        path: '/category',
        component: category,
        name: 'category',
    },
    {
        path: '/createBlog',
        component: createBlog,
        name: 'createBlog',
    },
    {
        path: '/adminusers',
        component: adminusers,
        name: 'adminusers',
    },
    {
        path: '/login',
        component: login,
        name: 'login',
    },
    {
        path: '/role',
        component: role,
        name: 'role',
    },
    {
        path: '/assignRole',
        component: assignRole,
        name: 'assignRole',
    },

















    // basic tutorials routes...
    {
        path: '/my-new-vue-route',
        component: firstPage
    },
    {
        path: '/new-route',
        component: newRoutePage
    },
    {
        path: '/testvuex',
        component: usecom
    },

    // vue hooks
    {
        path: '/hooks',
        component: hooks
    },
];

export default new Router({
    mode: 'history',
    routes
});

require('./bootstrap');

window.Vue = require('vue');
import router from './router';
import store from './store';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import common from './common.js';
import Vue from 'vue';
Vue.mixin(common);
Vue.use(ViewUI);

import Editor from 'vue-editor-js';
Vue.use(Editor)

Vue.component('mainapp', require('./components/mainapp.vue').default)

const app = new Vue({
    el: '#app',
    router,
    store,
});

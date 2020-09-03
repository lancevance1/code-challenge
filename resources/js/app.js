require('./bootstrap')

import Vue from 'vue'

/**
 * Import and setup Inertia.js
 **/
import { InertiaApp } from '@inertiajs/inertia-vue'
Vue.use(InertiaApp)

let app = document.getElementById('app')

new Vue({
    vuetify,
    store,
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: (name) => {
                return import(`@/Pages/${name}`).then(module => module.default)
            },
        },
    })
}).$mount(app);

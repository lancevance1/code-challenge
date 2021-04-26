import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import MediaComponent from "./components/MediaComponent";
import MediaItemComponent from "./components/MediaItemComponent";
import search from "./Pages/search";
import PortalVue from 'portal-vue'
import VueLazyload from 'vue-lazyload'
import { InertiaProgress } from '@inertiajs/progress'
import loading from './Shared/Loading'
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.use(loading)
// import { ZiggyVue } from 'ziggy';
// import { Ziggy } from './ziggy';

// Vue.use(ZiggyVue, Ziggy);


Vue.use(VueLazyload)

Vue.use(PortalVue)

Vue.use(plugin)
Vue.use(VueRouter)

const routes = [
  {
      name: 'mediaItem',
      path: '/media/:mediaId',
      component: MediaItemComponent
  },
  {
      name: 'media',
      path: '/media',
      component: MediaComponent
  },
  {
    name: 'search',
      path: '/search',
      component: search
  }
  

];
const router = new VueRouter({mode: 'history', routes: routes});


InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 2500,

  // The color of the progress bar.
  color: '#29d',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: true,
})


const el = document.getElementById('app')


new Vue(
  {
    render: h => h(App, {
      props: {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
      },
    }),
    router,
  }).$mount(el)

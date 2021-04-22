import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import MediaComponent from "./components/MediaComponent";
import MediaItemComponent from "./components/MediaItemComponent";
import search from "./Pages/search";
import PortalVue from 'portal-vue'
// import { ZiggyVue } from 'ziggy';
// import { Ziggy } from './ziggy';

// Vue.use(ZiggyVue, Ziggy);


const Waterfall = require("vue2-waterfall").Waterfall;
const WaterfallItem = require("vue2-waterfall").WaterfallItem;

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



const el = document.getElementById('app')
new Vue(
  
  {
    render: h => h(App, {
      props: {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
      },
    }),
    router
    
  }).$mount(el)

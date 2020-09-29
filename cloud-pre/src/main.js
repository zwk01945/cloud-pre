import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router';
import axios from '@/route/http.js';
import Routers from '@/route/router.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import '@/assets/css/menu.css'
import '@/assets/css/other.css'
import Vuex from 'vuex';
import stroage from "@/route/store";
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
Vue.use(VueHighlightJS)
import { Calendar } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Calendar);
Vue.use(Vuex)
Vue.use(ViewUI);
Vue.use(VueRouter);

Vue.prototype.$http= axios
Vue.config.productionTip = false

ViewUI.LoadingBar.config({
  height: 3
});
/*vuex 配置*/
const store = new Vuex.Store(stroage)

/*router 配置*/
const RouterConfig = {
  routes: Routers,
  mode:'history'
};
const router = new VueRouter(RouterConfig);
//main.js
router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  ViewUI.LoadingBar.finish();
})

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')

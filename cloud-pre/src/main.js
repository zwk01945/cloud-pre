import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routers from './route/router.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './assets/css/menu.css'
import './assets/css/other.css'

Vue.use(ViewUI);
Vue.use(VueRouter);
Vue.config.productionTip = false
const RouterConfig = {
  routes: Routers
};
ViewUI.LoadingBar.config({
  height: 3
});
const router = new VueRouter(RouterConfig);
//main.js
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    ViewUI.LoadingBar.start();
    document.title = to.meta.title;
  }
  next();
})

// eslint-disable-next-line no-unused-vars
router.afterEach(route => {
  ViewUI.LoadingBar.finish();
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

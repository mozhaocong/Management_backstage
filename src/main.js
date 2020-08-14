// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from './config/plugins'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
window.ImVue = Vue

Vue.config.productionTip = false

Vue.use(plugins)

import Https from './config/https'
import Storage from './config/storage'
Vue.prototype.$https = Https;
Vue.prototype.$storage = Storage;

// 抛出当选vue的原型
window.h5vue = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
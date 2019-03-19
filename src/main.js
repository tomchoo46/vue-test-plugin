import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Plugin from './plugin';

Vue.config.productionTip = false;

Vue.use(Plugin); // use plugin

const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

console.log(vm.$el.parentElement.getElementsByClassName('plugin-container').length); // I am able to access the parent element in the actual code, it will print out in the console of the browser

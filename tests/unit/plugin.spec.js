import VueRouter from 'vue-router';
import Plugin from '@/plugin';
import Vue from 'vue/dist/vue';
import App from '@/App.vue';
import router from '@/router';

describe('Plugin', () => {
  it('should change visibility when Vue image is clicked', () => {
    Vue.use(Plugin);
    Vue.use(VueRouter);

    const vm = new Vue({
      router,
      render: h => h(App),
    }).$mount();

    const image = vm.$el.getElementsByTagName('img')[0];
    const pluginContainer = vm.$el.parentElement.getElementsByClassName('plugin-container').length; // show TypeError: Cannot read property 'getElementsByClassName' of null

    expect(pluginContainer).toBe(0);
    image.click();
    expect(pluginContainer).toBe(1);
  });
});

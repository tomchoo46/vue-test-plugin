import PluginComponent from './plugin.vue';

const Plugin = {};

Plugin.install = (Vue) => {
  const PluginConstructor = Vue.extend(PluginComponent);
  const instance = new PluginConstructor();
  instance.$mount();
  document.body.appendChild(instance.$el); // append the plugin at the end of the body element

  Vue.prototype.$plugin = () => {
    instance.show = !instance.show;
  };
};

export default Plugin;

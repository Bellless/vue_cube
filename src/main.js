import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'
import Cook from './assets/js/cook'
// 全局注册请求方法
import apiAxios from './assets/js/axios'
// 全局注册过滤器方法
import * as filters from './assets/js/filter'
// import eventBus from './assets/js/eventBus'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

Vue.use(apiAxios)
// 挂载到根实例中(非vue的组件只能采用这种方式才能挂载到全局属性中使用,this.$Cook.方法名调用)
Vue.prototype.$Cook = Cook
Vue.config.productionTip = false

// 子父组件传递数据的方法 eventBus.$emit()--传递（子） eventBus.$on()--接收（父）
// 注册全局事件对象
// Vue.prototype.$eventBus = eventBus;
window.eventBus = new Vue();

new Vue({
  components: { App },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 注册全局引入JS  在所需要的引入外部js的页面使用
//<remote-script src=""></remote-script>
Vue.component('remote-script', {
  render: function (createElement) {
    var self = this;
    return createElement('script', {
      attrs: {
        type: 'text/javascript',
        src: this.src
      },
      on: {
        load: function (event) {
          self.$emit('load', event);
        },
        error: function (event) {
          self.$emit('error', event);
        },
        readystatechange: function (event) {
          if (this.readyState == 'complete') {
            self.$emit('load', event);
          }
        }
      }
    });
  },
  props: {
    src: {
      type: String,
      required: true
    }
  }
});
// 当路由push找不到时,捕获错误
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

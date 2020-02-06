import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import DivContainer from '@/components/ui/DivContainer'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('div-container', DivContainer)

new Vue({
  render: h => h(App),
}).$mount('#app')

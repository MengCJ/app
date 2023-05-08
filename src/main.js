import Vue from 'vue'
import App from './App.vue'

import {Button,Tree,Icon,Input ,Tag} from 'ant-design-vue';

import  * as Api from '@/api/index'
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Tree)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Tag)


new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$Api  = Api
  }
}).$mount('#app')



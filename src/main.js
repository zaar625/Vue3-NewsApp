import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {router} from './routes/index'
import {store} from './store/index'

Vue.config.productionTip = false

Vue.use(VueRouter);
// const router = new VueRouter({
//   routes:[

//   ]
// })



new Vue({
  render: h => h(App),
  router,//router:router
  store,
}).$mount('#app')

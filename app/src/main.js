import Vue from 'vue';
import App from './App';
import components from './components';
import './plugins/daovoice';

Vue.use(components);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

  

// function displayRadioValue() {
//   var ele = document.getElementsByName('tool');
    
//   for(i = 0; i < ele.length; i++) {
//       if(ele[i].checked){
//       console.log(ele[i].value);
//   }
// }
// }
import Vue from './vue.js'
import App from './App.vue'

new Vue({
  el: '#app',
  components: { App },
  render (h) {
    return h('App')
  }
})
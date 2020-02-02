import Vue from 'vue';

Vue.component('hello-world', {
  template: '#hello-world-template'
});

new Vue({
  el: '#app'
});
import Vue from 'vue';

Vue.component('blog-post', {
  // camelCase in JavaScript
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})

new Vue({
  el: '#app'
})
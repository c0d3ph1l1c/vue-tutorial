import Vue from 'vue';

Vue.component('my-component', {
  props: ['item', 'index'],
  template: '<li>{{ index }}: {{ item.name }}</li>'
});

new Vue({
  el: '#app',
  data: {
    items: [
      {id: 0, name: 'Apple'},
      {id: 1, name: 'Orange'},
      {id: 2, name: 'Blueberry'},
    ]
  }
});
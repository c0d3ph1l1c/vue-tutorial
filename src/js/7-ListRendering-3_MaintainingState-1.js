import Vue from 'vue';

var example1 = new Vue({
  el: '#v-for-key',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
});
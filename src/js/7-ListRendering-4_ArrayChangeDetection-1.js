import Vue from 'vue';

const example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
});

setTimeout(() => example1.items.push({ message: 'Baz' }), 2000);
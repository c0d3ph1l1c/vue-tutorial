import Vue from 'vue';

const example2 = new Vue({
  el: '#example-2',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
});

setTimeout(() => {
  example2.items = example2.items.filter(item => item.message.match(/Foo/));
}, 4000);

import Vue from 'vue';

const items = [
  { id: 0, name: 'T-Shirt', qty: 200, price: '$20'},
  { id: 1, name: 'Jeans', qty: 100, price: '$40'},
  { id: 2, name: 'Jacket', qty: 50, price: '$80'}
];

new Vue({
  el: '#app',
  data: {
    items: [...items]
  },
  methods: {
    replenishItems: function() {
      console.log(items);
      console.log(this.items);
      for(let item of items) {
        this.items.push(item);
        console.log(item);
      }
    }
  }
});
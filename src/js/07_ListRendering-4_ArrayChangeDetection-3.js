import Vue from 'vue';

const vm = new Vue({
  el: '#app',
  data: {
    items: ['a', 'b', 'c']
  }
});

// vm.items[1] = 'x';  // is NOT reactive
// vm.items.length = 2; // is NOT reactive

// To set an item with the index
// 1. Vue.set 
// setTimeout(() => Vue.set(vm.items, 1, 'x')
// , 2000);

// setTimeout(() => vm.$set(vm.items, 1, 'x')
// , 2000);

// 2. Splice
setTimeout(() => vm.items.splice(1,1,'x'), 2000);

// To modify the length of the array
// 1. Splice
setTimeout(() => vm.items.splice(2)
, 4000);
import Vue from 'vue';

const vm = new Vue({
  el: '#app',
  data: {
    pick: { id: 2, value: 'B' },
    a: { id: 1, value: 'A' },
    b: { id: 2, value: 'B' },
  },
  watch: {
    pick: function(newVal, oldVal) {
      console.log('Old Val: ' + JSON.stringify(oldVal));
      console.log('New Val: ' + JSON.stringify(newVal));
      console.log('vm.pick === vm.a: ' + (vm.pick === vm.a));
      console.log('vm.pick === vm.b: ' + (vm.pick === vm.b));
    }
  }
});

console.log('vm.pick === vm.b: ' + (vm.pick === vm.b));
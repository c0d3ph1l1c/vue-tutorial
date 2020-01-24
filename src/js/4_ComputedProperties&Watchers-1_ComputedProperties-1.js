import Vue from 'vue';

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function() {
      return this.message.split('').reverse().join('');   
    }
  }
});

console.log(vm.reversedMessage);
// // vm.message = 'Goodbye';
// // console.log(vm.reversedMessage);

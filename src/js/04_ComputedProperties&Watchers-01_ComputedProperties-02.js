import Vue from 'vue';

const vm = new Vue({
  el: '#example',
  data: {
    message: 'ms elapsed since 1970/1/1 00:00:00 UTC'
  },
  methods: {
    nowMet: function() {
      return Date.now();
    }
  },
  computed: {
    // The following computed property will never update, because Date.now() is not a reactive dependency
    nowComp: function() {
      return Date.now();
    }
  }
});

setTimeout(() => 
  vm.message = vm.message.toUpperCase(),
3000);
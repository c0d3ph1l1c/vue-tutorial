import Vue from 'vue';

new Vue({
  el: '#app',
  methods: {
    clear: function() {
      document.querySelector('#input').value = '';
    },
    doSomething: function() {
      console.log('Do something!');
    },
    echoA: function() {
      console.log('A');
    },
    echoButton: function(event) {
      const button = ['left', '', 'right'];
      console.log(button[event.button]);
      event.preventDefault();
    }
  }
})
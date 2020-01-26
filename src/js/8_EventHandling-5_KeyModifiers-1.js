import Vue from 'vue';

new Vue({
  el: '#app',
  methods: {
    submit: function() {
      console.log('Submitted!');
    },
    onPageDown: function() {
      console.log('Page Down!');
    }
  }
});

Vue.config.keyCodes = {
  f2: 113
};
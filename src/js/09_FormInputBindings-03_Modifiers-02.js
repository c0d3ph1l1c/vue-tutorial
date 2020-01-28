import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    num1: null,
    num2: null,
  },
  computed: {
    sum: function() {
      if(this.num1 && this.num2) {
        return this.num1 + this.num2;
      }
      return null;
    }
  }
})
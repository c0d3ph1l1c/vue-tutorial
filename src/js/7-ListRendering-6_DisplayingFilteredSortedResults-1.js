import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    numbers: [1, 2, 3, 4, 5]
  }, 
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      })
    }
  }
});

new Vue({
  el: '#app2',
  data: {
    sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0;
      })
    }
  },
})
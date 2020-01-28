import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    selected: '',
  }
});

new Vue({
  el: '#app2',
  data: {
    selected: '',
  }
});

new Vue({
  el: '#app3',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
});
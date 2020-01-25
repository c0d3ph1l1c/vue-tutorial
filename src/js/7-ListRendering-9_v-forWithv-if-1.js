import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    todos: [
      { isComplete: false, description: 'Shopping'},
      { isComplete: true, description: 'Laundry'},
      { isComplete: false, description: 'Work'}
    ]
  }
});

new Vue({
  el: '#app2',
  data: {
    todos: [
      { isComplete: false, description: 'Shopping'},
      { isComplete: true, description: 'Laundry'},
      { isComplete: false, description: 'Work'}
    ]
  },
  methods: {
    toggleTodos: function() {
      if(this.todos.length) {
        this.todos = [];
      } else {
        this.todos = [
          { isComplete: false, description: 'Shopping'},
          { isComplete: true, description: 'Laundry'},
          { isComplete: false, description: 'Work'}
        ];
      }
    }
  }
});
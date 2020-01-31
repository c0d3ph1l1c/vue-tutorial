import Vue from 'vue';

Vue.component('slot-example', {
  data: function() {
    return {
      msg: 'Hello Vue!'
    }
  },
  template: `
    <div>
      <slot v-bind:msg="msg"></slot>
    </div>
  ` 
});

Vue.component('todo-list', {
  props: ['todos'],
  template: `
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo.id"
      >
        <slot name="todo" v-bind:todo="todo"></slot>
      </li>
    </ul>
  `
})

new Vue({
  el: '#app',
  data: {
    todos: [
      { id: 1, text: 'Task 1', isComplete: true },
      { id: 2, text: 'Task 2', isComplete: true },
      { id: 3, text: 'Task 3', isComplete: false },
      { id: 4, text: 'Task 4', isComplete: true },
      { id: 5, text: 'Task 5', isComplete: false }
    ]
  }
});
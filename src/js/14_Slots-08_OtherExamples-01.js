import Vue from 'vue';

Vue.component('todo-list', {
  props: ['todos'],
  template: `
    <ul>
      <li
        v-for="todo in todos"
        v-bind:key="todo.id"
      >
        <slot 
          name="todo" 
          v-bind:todo="todo"
        >
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  `
});

new Vue({
  data: {
    todos: [
      { id: 1, text: 'Task 1', isComplete: true },
      { id: 2, text: 'Task 2', isComplete: false },
      { id: 3, text: 'Task 3', isComplete: true },
      { id: 4, text: 'Task 4', isComplete: true },
      { id: 5, text: 'Task 5', isComplete: false }
    ]
  },
  el: '#app'
});
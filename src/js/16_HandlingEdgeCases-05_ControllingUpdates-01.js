import Vue from 'vue';

Vue.component('student-list', {
  props: ['students'],
  template: `
    <div>
      <ul>
        <li 
          v-for="student in students"
          :key="student"
        > {{ student }} </li>
      </ul>
      <button @click="$emit('uppercase-john')">Change John to JOHN</button>
      <button @click="$forceUpdate()">Force Update</button>
    </div>
  `
});

new Vue({
  el: '#app',
  data: {
    students: [ 'John', 'Jenny', 'Adam' ]
  },
  methods: {
    uppercaseJohn: function() {
      this.students[0] = 'JOHN';
    }
  }
})
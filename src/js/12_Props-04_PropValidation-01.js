import Vue from 'vue';

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Vue.component('my-component', {
  props: {
    // Basic type check (`null` and `undefined` values will pass any type validation)
    propA: Number,
    // Multiple possible types
    propB: [String, Number],
    // Required string
    propC: {
      type: String,
      required: true
    },
    // Number with a default value
    propD: {
      type: Number,
      default: 100
    },
    // Object with a default value
    propE: {
      type: Object,
      // Object or array defaults must be returned from a factory function
      default: function() {
        return { message: 'hello' }
      }
    },
    // Custom validator function
    propF: {
      validator: function(value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    },
    author: Person
  },
  template: `
    <ul>
      <li>{{ propA }}</li>
      <li>{{ propB }}</li>
      <li>{{ propC }}</li>
      <li>{{ propD }}</li>
      <li>{{ propE }}</li>
      <li>{{ propF }}</li>
      <li>{{ author }}</li>
    </ul>
  `
});

new Vue({
  el: '#app',
  methods: {
    Person
  }
});
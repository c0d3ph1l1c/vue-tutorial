import Vue from 'vue';

Vue.component('my-component', {
  data: function() {
    return {
      number: null
    }
  },
  template: `
    <div>
      <p>foo (default: 1): {{ $root.foo }}</p>
      <p>foo * 10: {{ $root.bar }}</p>
      <input 
        v-model.number="number"
        v-on:input="$root.foo = number"
        placeholder="Enter value for foo"
      >
      <button v-on:click="$root.baz()">Add 1 to foo</button>
    </div>
  `
});

new Vue({
  el: '#app',
  data: {
    foo: 1
  },
  computed: {
    bar: function() {
      return this.foo * 10;
    }
  },
  methods: {
    baz: function() {
      this.foo += 1;
    }
  }
});
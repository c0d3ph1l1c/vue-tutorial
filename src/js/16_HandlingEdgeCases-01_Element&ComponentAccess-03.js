import Vue from 'vue';

Vue.component('base-input', {
  methods: {
    focus: function() {
      this.$refs.input.focus();
    }
  },
  template: `
    <input ref="input"></input>
  `
});

Vue.component('parent-component', {
  methods: {
    focus: function() {
      this.$refs.usernameInput.focus();
    }
  },
  template: `
  <div>
    <base-input ref="usernameInput"></base-input>
    <button v-on:click="focus">Focus</button>
  </div>
  `
});

new Vue({
  el: '#app'
});
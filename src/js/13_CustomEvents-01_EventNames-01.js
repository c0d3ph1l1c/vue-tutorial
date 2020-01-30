import Vue from 'vue';

Vue.component('my-component', {
  template: `
    <div>
      <button v-on:click="$emit('my-event')">Do Something</button>
    </div>
  `
});

new Vue({
  el: '#app',
  methods: {
    doSomething: function() {
      alert('Do Something!');
    }
  }
});
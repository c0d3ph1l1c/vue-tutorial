import Vue from 'vue';

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
});

new Vue({
  el: '#app',
  data: {
    searchText: ''
  }
});

new Vue({
  el: '#app2',
  data: {
    searchText: ''
  }
});
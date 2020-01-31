import Vue from 'vue';

Vue.component('current-user', {
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe'
      }
    }
  },
  template: `
    <span>
      <slot v-bind:user="user">
        {{ user.lastName }}
      </slot>
    </span>
  `
});

new Vue({
  el: '#app'
});
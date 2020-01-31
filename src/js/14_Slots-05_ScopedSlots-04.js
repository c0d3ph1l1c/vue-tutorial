import Vue from 'vue';

Vue.component('current-user', {
  data: function() {
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

Vue.component('current-user2', {
  data: function() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe'
      }
    }
  },
  template: `
    <span>
      <slot>{{ user.firstName }}</slot>
    </span>
  `
});

new Vue({
  el: '#app2'
});
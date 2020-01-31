import Vue from 'vue';

Vue.component('current-user', {
  data: function() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        age: 18,
        gender: 'Male'
      }
    }
  },
  template: `
    <span>
      <slot 
        v-bind:user="user"
      >
        {{ user.age }}
      </slot>
      <slot 
        name="other" 
        v-bind:user="user"
      >
        {{ user.gender }}
      </slot>
    </span>
  ` 
});

new Vue({
  el: '#app'
});
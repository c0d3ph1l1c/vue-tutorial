import Vue from 'vue';

Vue.component('base-layout', {
  template: `
    <div>
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
  `
});

new Vue({
  el: '#app'
});

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
})

new Vue({
  el: '#app2'
});


import Vue from 'vue';

Vue.component('navigation-link', {
  props: ['url'],
  template: `
    <a
      v-bind:href="url"
      class="nav-link"
    >
      <slot></slot>
    </a>
  `
});

new Vue({
  el: '#app',
  data: {
    user: {
      name: 'John Doe'
    }
  }
});
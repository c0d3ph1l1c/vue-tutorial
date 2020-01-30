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

Vue.component('font-awesome-icon', {
  props: ['name'],
  template: `
    <span 
      v-bind:class="{fa: true, ['fa-' + name]: true}"
    ></span>
  `
});

new Vue({
  el: '#app',
  data: {
    user: 'user'
  }
});
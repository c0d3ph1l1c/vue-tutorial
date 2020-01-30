import Vue from 'vue';

Vue.component('submit-button', {
  template: `
    <button>
      <slot>Submit</slot>
    </button>
  `
});

new Vue({
  el: '#app'
});
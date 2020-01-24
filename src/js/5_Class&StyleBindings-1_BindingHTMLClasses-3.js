import Vue from 'vue';

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
});

new Vue({
  el: '#app',
  data: {
    isActive: false
  },
  methods: {
    toggleActive: function() {
      this.isActive = !this.isActive;
    }
  }
})
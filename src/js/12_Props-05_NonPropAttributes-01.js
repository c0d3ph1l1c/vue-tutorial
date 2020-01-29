import Vue from 'vue';

Vue.component('bootstrap-date-input', {
  props: ['data-date-picker', 'class'],
  template: '<input type="date" class="form-control">'
})

new Vue({
  el: '#app'
});
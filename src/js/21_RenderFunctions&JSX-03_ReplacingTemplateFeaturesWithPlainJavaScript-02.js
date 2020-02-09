import Vue from 'vue';

Vue.component('custom-input', {
  props: ['value'],
  render: function(createElement) {
    var self = this;
    return createElement('input', {
      domProps: {
        value: self.value
      },
      on: {
        input: function(event) {
          self.$emit('input', event.target.value);
        }
      }
    });
  }
});

new Vue({
  el: '#app',
  data: {
    searchText: ''
  }
});
import Vue from 'vue';

Vue.directive('demo', function(el, binding) {
  console.log(binding.value.color);
  console.log(binding.value.text);
});

new Vue({
  el: '#app'
});
import Vue from 'vue';

Vue.directive('color-swatch', function(el, binding) {
    el.style.backgroundColor = binding.value; 
});

new Vue({
  el: '#app',
  data: {
    bgColor: '#ff8888'
  }
});
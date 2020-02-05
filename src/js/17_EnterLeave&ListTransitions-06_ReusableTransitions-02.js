import Vue from 'vue';

Vue.component('my-special-transition', {
  functional: true,
  render: function(createElement, context) {
    var data = {
      props: {
        name: 'very-special-transition',
        mode: 'out-in'
      },
      on: {
        beforeEnter: function(el) {
          el.style.opacity = 0;
          el.style.transform = 'scaleY(0)';
          el.style.transition = 'all 5s';
        },
        enter: function(el, done) {
          setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'scaleY(1)';
            done();
          }, 10);          
        },
        beforeLeave: function(el) {
          el.style.opacity = 0;
          el.style.transform = 'scaleY(0)';
          el.style.transition = 'all 5s';
        },
        leave: function(el, done) {
          setTimeout(() => {
            done();
          }, 5000);
        }
      }
    }
    return createElement('transition', data, context.children);
  }
});

new Vue({
  el: '#app',
  data: {
    show: true
  }
});
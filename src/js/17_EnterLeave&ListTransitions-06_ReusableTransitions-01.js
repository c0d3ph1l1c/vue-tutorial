import Vue from 'vue';
import Velocity from 'velocity-animate';

Vue.component('my-special-transition', {
  template: '\
    <transition\
      name="very-special-transition"\
      mode="out-in"\
      v-on:before-enter="beforeEnter"\
      v-on:enter="enter"\
      v-on:after-enter="afterEnter"\
      v-on:before-leave="beforeLeave"\
      v-on:leave="leave"\
      v-on:after-leave="afterLeave"\
    >\
      <slot></slot>\
    </transition>\
  ',
  methods: {
    // Element not in DOM yet
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.transform = 'scaleY(0)';
      el.style.transition = 'all 6s';
      console.log(`beforeEnter: ${el.classList}`);
    },
    // Element in DOM, enter state persist until done() 
    enter: function(el, done) {
      setTimeout(function() {
        el.style.opacity = 1;
        el.style.transform = 'scaleY(1)';
        done();
      }, 10);
      console.log(`enter: ${el.classList}`);
    },
    // Element in DOM after done()
    afterEnter: function(el) {
      console.log(`afterEnter: ${el.classList}`);
    },
    // Element still in DOM
    beforeLeave: function(el) {
      el.style.opacity = 0;
      el.style.transform = 'scaleY(0)';
      el.style.transition = 'all 6s';
      console.log(`beforeLeave: ${el.classList}`);
    },
    // Element still in DOM, leave state persist until done()
    leave: function(el, done) {
      setTimeout(function() {
        done();
      }, 6000);
      console.log(`leave: ${el.classList}`);
    },
    // Element not in DOM after done()
    afterLeave: function(el) {
      console.log(`afterLeave: ${el.classList}`);
    },
  }
});

new Vue({
  el: '#app',
  data: {
    show: true
  }
});
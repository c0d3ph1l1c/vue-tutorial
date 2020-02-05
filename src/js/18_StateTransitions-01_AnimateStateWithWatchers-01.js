import Vue from 'vue';
import TweenLite from 'gsap';

new Vue({
  el: '#animated-number-demo',
  data: {
    number: 0,
    tweenedNumber: 0
  },
  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    number: function(newValue) {
      //create a tween that changes the value of the tweenedNumber property of the data object to newValue over the course of 0.5 seconds.
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  }
})
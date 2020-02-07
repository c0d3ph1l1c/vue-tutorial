import Vue from 'vue';

var strategies = Vue.config.optionMergeStrategies;
strategies.data = function(toVal, fromVal) {
  if(!toVal) return fromVal;
  if(!fromVal) return toVal;
  // use mixin data without merging
  return toVal;
}

var mixin = {
  data: function() {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
};

new Vue({
  mixins: [mixin],
  data: function() {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function() {
    console.log(this.$data);
  }
});
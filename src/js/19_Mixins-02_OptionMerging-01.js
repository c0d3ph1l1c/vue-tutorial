import Vue from 'vue';

/* When a mixin and the component itself contain overlapping options, they will be “merged” using appropriate strategies.

For example, data objects undergo a recursive merge, with the component’s data taking priority in cases of conflicts. */

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
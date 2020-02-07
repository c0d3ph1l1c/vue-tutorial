import Vue from 'vue';

/* Options that expect object values, for example methods, components and directives, will be merged into the same object. The component’s options will take priority when there are conflicting keys in these objects. */

var mixin = {
  methods: {
    foo: function() {
      console.log('foo');
    },
    conflicting: function() {
      console.log('from mixin');
    }
  }
};

var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar: function() {
      console.log('bar');
    },
    conflicting: function() {
      console.log('from self');
    }
  }
});

vm.foo();
vm.bar();
vm.conflicting();
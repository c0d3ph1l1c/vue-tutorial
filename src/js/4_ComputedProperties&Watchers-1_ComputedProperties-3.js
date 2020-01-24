import Vue from 'vue';

var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    // fullName: 'Foo Bar'
  },
  // watch: {
  //   firstName: function(val) {
  //     this.fullName = val + ' ' + this.lastName;
  //   },
  //   lastName: function(val) {
  //     this.fullName = this.firstName + ' ' + val;
  //   }
  // },

  // It is often a better idea to use a computed property rather than an imperative watch callback
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }
});

setTimeout(() => vm.firstName = 'foo'
, 2000);
setTimeout(() => vm.lastName = 'bar'
, 4000);
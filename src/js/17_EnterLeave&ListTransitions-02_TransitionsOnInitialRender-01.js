import Vue from 'vue';

new Vue({
  el: '#app'
});

new Vue({
  el: '#app2',
  methods:{
    // Transition hooks
    beforeAppear: function(el){
      console.log('  BEFORE APPEAR');
    },
    appear: function(el, done){
      console.log('  APPEAR');
    },
    afterAppear: function(el){
      console.log('  AFTER APPEAR');
    },
    appearCancelled: function(el) {
      console.log('  APPEAR CANCELLED');
    }
  },
  beforeCreate: function() {
    console.log("BEFORE CREATE");
  }
});

import Vue from 'vue';

new Vue({
  el: '#app',
  data: {

  }, 
  methods: {
    doThis: function(event, msg) {
      if(event.target.tagName == 'A') {
        console.log(msg);
        console.log(event.target);
      }
    },
    doThat: function (event, msg) {
      console.log(msg);
      console.log(event.target);
    },
    onSubmit: function () {
      console.log('Submitted!');
    },
    onScroll: function(event) {
      event.preventDefault();
    }
  }
})
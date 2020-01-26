import Vue from 'vue';

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // defined methods under the 'methods' object
  methods: {
    greet: function(event) {
      // 'this' inside methods points to the Vue instance
      alert('Hello ' + this.name + '!');
      // 'event' is the native DOM event
      if(event) {
        alert(event.target.tagName);
      }
    }
  }
});

example2.greet()  // => 'Hello Vue.js!'
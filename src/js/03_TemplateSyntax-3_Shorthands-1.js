import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    // arguments
    url: 'http://www.google.com',
    linkTitle: 'Google',
    // dynamic arguments (must be in lowercase, as browsers will coerce attribute names into lowercase)
    attributename: 'href',
    eventname: 'click',
    color: 'black',
  },
  methods: {
    // arguments
    google: function() {
      this.url = 'http://www.google.com';
      this.linkTitle = 'Google';
    },
    bing: function() {
      this.url = 'http://www.bing.com';
      this.linkTitle = 'Bing';
    },
    // dynamic arguments
    changeAttribute: function(attribute) {
      this.attributename = attribute;
    },
    changeColor: function(color) {
      this.color = color;
    },
    changeEvent: function(event) {
      this.eventname = event; 
    }
  }
});
import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    // arguments
    url: 'http://www.google.com',
    linkTitle: 'Google',
    // dynamic arguments (must be in lowercase)
    attributename: 'href',
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
    href: function() {
      this.attributename = 'href';
    },
    title: function() {
      this.attributename = 'title';
    },
  }
});
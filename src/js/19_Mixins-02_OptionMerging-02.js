import Vue from 'vue';

/* Hook functions with the same name are merged into an array so that all of them will be called. Mixin hooks will be called before the component’s own hooks. */

var mixin = {
  created: function() {
    console.log('mixin hook called');
  }
};

new Vue({
  mixins: [mixin],
  created: function() {
    console.log('component hook called');
  }
});


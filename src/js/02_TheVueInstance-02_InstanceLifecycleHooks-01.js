import Vue from 'vue';

const app = new Vue({
  el: '#app',
  data: {
    msg: 'hello vue!',
    lower: true,
    destroyNote: ''
  },
  methods: {
    toggleCase: function() {
      if(this.lower) {
        this.msg = this.msg.toUpperCase();
        this.lower = false;
      } else {
        this.msg = this.msg.toLowerCase();
        this.lower = true;
      }
    },
    destroy: function() {
      this.destroyNote = `Executed this.$destroy(). Notice the 'Toggle Case' button does not work anymore.`
      setTimeout(function(){
        app.$destroy();
      }, 100);
    }
  },
  created: function() {
    console.log(`Created: msg = ${this.msg}`);
  },
  mounted: function() {
    console.log(`Mounted: msg = ${this.msg}`);
  },
  updated: function() {
    console.log(`Updated: msg = ${this.msg}`);
  },
  destroyed: function() {
    console.log(`Destroyed: msg = ${this.msg}`);
  }
});
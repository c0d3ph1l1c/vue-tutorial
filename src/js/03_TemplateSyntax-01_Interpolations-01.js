import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    // text
    msg: 'hello vue!',
    lower: true,
    // html
    rawHtml: `
      <span style="color:red">
        This should be red
      </span>
    `,
    // attributes
    dynamicId: 'blue',
    // javascript
    number: null,
    ok: false,
    message: '',
    id: 1,
  },
  methods: {
    // text
    toggleCase: function() {
      if(this.lower) {
        this.msg = this.msg.toUpperCase();
        this.lower = false;
      } else {
        this.msg = this.msg.toLowerCase();
        this.lower = true;
      }
    },
    // attributes
    toggleColor: function() {
      this.dynamicId = this.dynamicId == 'blue'? 'red' : 'blue';      
    },
    // javascript
    toggle: function() {
      this.ok = !this.ok;
    },
    toggleList: function() {
      this.id = this.id == 1? 2 : 1;
    }
  }
});
import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    activeClass: '',
    errorClass: '',
    isActive2: false,
    activeClass2: 'active',
    errorClass2: '',
    isActive3: false,
    errorClass3: ''
  }, 
  methods: {
    toggleActive: function() {
      this.activeClass = this.activeClass? '' : 'active';
    },
    toggleError: function() {
      this.errorClass = this.errorClass ? '' : 'text-danger';
    },
    toggleActive2: function() {
      this.isActive2 = !this.isActive2;
    },
    toggleError2: function() {
      this.errorClass2 = this.errorClass2 ? '' : 'text-danger';
    },
    toggleActive3: function() {
      this.isActive3 = !this.isActive3;
    },
    toggleError3: function() {
      this.errorClass3 = this.errorClass3 ? '' : 'text-danger';
    }
  }
})
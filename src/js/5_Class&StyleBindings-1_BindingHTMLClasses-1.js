import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    isActive: false,
    hasError: false,
    classObject: {
      active: false,
      'text-danger': false
    },
    isActive2: false,
    error: null
  },
  methods: {
    toggleActive: function() {
      this.isActive = !this.isActive;
    },
    toggleError: function() {
      this.hasError = !this.hasError;
    },
    toggleObjectActive: function () {
      this.classObject.active = !this.classObject.active;
    },
    toggleObjectError: function () {
      this.classObject['text-danger'] = !this.classObject['text-danger'];
    },
    toggleComputedActive: function () {
      this.isActive2 = !this.isActive2;
    },
    toggleComputedError: function () {
      this.error = this.error ? 
        null : { type: 'fatal' };
    }
  }, 
  computed: {
    classObject2: function() {
      return {
        active: this.isActive2 && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
});
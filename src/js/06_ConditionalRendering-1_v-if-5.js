import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    loginType: 'username',
    loginType2: 'username'
  },
  methods: {
    toggleLoginType: function() {
      this.loginType = this.loginType === 'username'? 'email' : 'username';
    },
    toggleLoginType2: function() {
      this.loginType2 = this.loginType2 === 'username'? 'email' : 'username';
    }
  }
});
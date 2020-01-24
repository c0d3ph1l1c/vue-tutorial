import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    baseStyles: {
      width: '180px',
      height: '40px',
      background: '#ccc',
      color: '#000 '
    },
    overridingStyles: {
      background: '#f88',
      color: '#fff ',
      fontSize: '1rem',
      textAlign: 'center'
    }
  }
})
import Vue from 'vue';

Vue.component('terms-of-service', {
  template: `
    <div v-once>
      <h1>Terms of Service</h1>
      <p>... a lot of static content ...</p>
    </div>
  `
});

new Vue({
  el: '#app'
});
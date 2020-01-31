import Vue from 'vue';

Vue.component('async-example', function(resolve, reject) {
  setTimeout(function() {
    // Pass the component definition to the resolve callback
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000);
});

Vue.component('async-webpack-example', function(resolve) {
  // This special require syntax will instruct Webpack to automatically split your built code into bundles which are loaded over Ajax requests.
  require(['../../components/my-async-component'], resolve)
});

Vue.component('async-webpack-example2', 
  // The `import` function returns a Promise.
  () => import('../../components/my-async-component2')
);

new Vue({
  el: '#app',
  components: {
    'my-component': () => import('../../components/my-async-component3')
  }
});
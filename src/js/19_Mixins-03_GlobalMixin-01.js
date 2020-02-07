import Vue from 'vue';

/* You can also apply a mixin globally. Use with caution! Once you apply a mixin globally, it will affect every Vue instance created afterwards. When used properly, this can be used to inject processing logic for custom options. */

// inject a handler for `myOption` custom option

Vue.mixin({
  created: function() {
    var myOption = this.$options.myOption;
    if(myOption) {
      console.log(myOption);
    }
  }
});

new Vue({
  myOption: 'hello!'
});

/* Use global mixins sparsely and carefully, because it affects every single Vue instance created, including third party components. In most cases, you should only use it for custom option handling like demonstrated in the example above. It’s also a good idea to ship them as Plugins to avoid duplicate application. */
import Vue from 'vue';

new Vue({
  el: '#app',
  data: function() {
    return {
      templateText: document.querySelector('#defaultTemplateText').innerHTML.trim(),
    }
  },
  computed: {
    result: function() {
      if(!this.templateText) {
        return 'Enter a valid template above';
      }

      try {
        var result = Vue.compile(this.templateText.replace(/\s{2,}/g, ''));

        console.log(result);

        return {
          render: this.formatFunction(result.render),
          staticRenderFns: result.staticRenderFns.map(this.formatFunction)
        }
      }catch(error) {
        return error.message;
      }
    }
  },
  methods: {
    formatFunction: function(fn) {
      return fn.toString().replace(/(\{\n)(\S)/, '$1 $2');
    }
  }
});

console.error = function(error) {
  throw new Error(error);
}
import Vue from 'vue';

// When the global filter has the same name as the local filter, the local filter will be preferred.

// Example 1 (local filters in mustaches)
Vue.component('custom-heading', {
  props: ['message'],
  filters: {
    capitalize: function(value) {
      if(!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  template: '<h1>{{ message | capitalize }}</h1>'
});

// Example 2 (global filters in mustaches)
Vue.component('custom-heading-2', {
  props: ['message'],
  template: '<h1>{{ message | capitalize }}</h1>'
});

Vue.filter('capitalize', function(value) {
  if(!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

// Example 3 (filter in v-bind)
Vue.component('custom-div', {
  props: ['rawId'],
  filters: {
    formatId: function(value) {
      if(!value) return '';
      value = value.toLowerCase();
      return value.replace(/\s+/, '-');
    }
  },
  template: '<div v-bind:id="rawId | formatId"></div>'
});

// Example 4 (chained filters)
Vue.component('custom-greeting', {
  props: ['name'],
  filters: {
    capitalize: function(value) {
      if(!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    greet: function(value) {
      if(!value) return '';
      return 'Hello, ' + value
    }
  },
  template: '<h1>{{ name | capitalize | greet }}</h1>'
});

// Example 4 (filters with arguments)
Vue.component('custom-greeting-2', {
  props: ['name'],
  filters: {
    greet: function(value, str1, str2) {
      if(!value) return '';
      return str1 + (value.charAt(0).toUpperCase() + value.slice(1)) + str2;
    }
  },
  template: '<h1>{{ name | greet("Hello, ", ". Welcome Back!") }}</h1>'
});

new Vue({
  el: '#app',
  data: {
    message: '',
    message2: '',
    rawId: 'Div  Custom',
    name: '',
    name2: ''
  }
});
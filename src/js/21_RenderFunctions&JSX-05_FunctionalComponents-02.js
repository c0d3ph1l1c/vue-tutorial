import Vue from 'vue';

/* On normal components, attributes not defined as props are automatically added to the root element of the component, replacing or intelligently merging with any existing attributes of the same name.

Functional components, however, require you to explicitly define this behavior.

By passing context.data as the second argument to createElement, we are passing down any attributes or event listeners used on my -functional-button.It’s so transparent, in fact, that events don’t even require the .native modifier. */

Vue.component('my-functional-button', {
  functional: true,
  render: function(createElement, context) {
    // Transparently pass any attributes, event listeners, children, etc.
    return createElement(
      'button', 
      Object.assign(
        {}, 
        context.data,
        {
          class: {
            btn: true,
            'btn-primary': true
          }
        }
      ), 
      context.children
    );
  }
});

/* If you are using template-based functional components, you will also have to manually add attributes and listeners. Since we have access to the individual context contents, we can use data.attrs to pass along any HTML attributes and listeners (the alias for data.on) to pass along any event listeners. */

import MyFunctionalButton2 from '../../components/my-functional-button-2.vue';

new Vue({
  el: '#app',
  data: {
    buttonText: 'On',
    buttonText2: 'On',
  },
  components: {
    'my-functional-button-2': MyFunctionalButton2
  },
  methods: {
    toggleButton: function() {
      this.buttonText = this.buttonText == 'On'? 'Off' : 'On';
    },
    toggleButton2: function() {
      this.buttonText2 = this.buttonText2 == 'On'? 'Off' : 'On';
    }
  }
});
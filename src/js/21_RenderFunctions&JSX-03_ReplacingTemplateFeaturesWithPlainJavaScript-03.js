import Vue from 'vue';

// Static example
Vue.component('static-example', {
  render: function(createElement) {
    // `<div><slot></slot></div>`
    return createElement('div', this.$slots.default);
  }
});

// Scoped example
Vue.component('scoped-example', {
  props: ['message'],
  render: function(createElement) {
    // `<div><slot :text="message"></slot></div>`
    return createElement('div', [
      this.$scopedSlots.default({
        text: this.message
      })
    ]);
  }
});

// Scoped example 2
Vue.component('child', {
  data: function () {
    return {
      text: 'This message is passed to parent scoped-example-2'
    };
  },
  render: function (createElement) {
    return createElement('div', 
      this.$scopedSlots.default({ 
        text: this.text
      })
    );
  }
})

Vue.component('scoped-example-2', {
  render: function(createElement) {
    return createElement('div', [
      createElement('child', {
        // pass `scopedSlots` in the data object
        // in the form of { name: props => VNode | Array<VNode> }
        scopedSlots: {
          default: function(props) {
            return createElement('span', props.text);
          }
        }
      })
    ]);
  }
});

new Vue({
  el: '#app',
  data: {
    message: 'This is scoped slot example'
  }
})
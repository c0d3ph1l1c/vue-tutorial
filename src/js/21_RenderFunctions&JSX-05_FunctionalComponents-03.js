import Vue from 'vue';

Vue.component('my-functional-component', {
  functional: true,
  render: function(createElement, context) {
    console.log('Children:');
    console.log(context.children);
    console.log('Slots:');
    console.log(' - foo:');
    console.log(context.slots().foo);
    console.log(' - default:');
    console.log(context.slots().default);
    console.log('Props:');
    console.log(context.props);
    return createElement(
      'div',
      context.data,
      context.props.useChildren ? context.children : [context.slots().foo, context.slots().default]
    );
  }
})

new Vue({
  el: '#app',
  data: {
    useChildren: false
  }
});
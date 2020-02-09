import Vue from 'vue';

/* 
  All VNodes in the component tree must be unique. That means the following render function is invalid:

  render: function (createElement) {
    var myParagraphVNode = createElement('p', 'hi')
    return createElement('div', [
      // Yikes - duplicate VNodes!
      myParagraphVNode, myParagraphVNode
    ])
  } 
*/

/* If you really want to duplicate the same element/component many times, you can do so with a factory function. For example, the following render function is a perfectly valid way of rendering 20 identical paragraphs. */

Vue.component('greeting', {
  render: function(createElement) {
    return createElement('div',
      Array.apply(null, { length: 20 }).map(function() {
        return createElement('p', 'hi');
      })
    );
  } 
});

new Vue({
  el: '#app'
});
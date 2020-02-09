import Vue from 'vue';
import AnchoredHeading from '../../components/AnchoredHeading.vue';

new Vue({
  el: '#demo',
  render: function(h) {
    return (
      <AnchoredHeading level={1}>
        <span>Hello</span> world!
      </AnchoredHeading>
    );
  }
});
import Vue from 'vue';

Vue.component('base-layout', {
  template: `
    <div>
      <div class="red">
        <slot name="red"></slot>
      </div>
      <div class="blue">
      <slot name="blue"></slot>
      </div>
    </div>
  `
});

new Vue({
  el: '#app',
  data: {
    dynamicslotname: 'red'
  },
  methods: {
    toggleSlot: function() {
      this.dynamicslotname = (this.dynamicslotname == 'red') ? 'blue' : 'red';
    }
  }
});
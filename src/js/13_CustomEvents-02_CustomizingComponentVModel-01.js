import Vue from 'vue';

// The value of lovingVue will be passed to the checked prop. The lovingVue property will then be updated when <base-checkbox> emits a change event with a new value

// Note that you still have to declare the checked prop in the component’s props option. 

Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <div>
      <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
      <label>{{ checked }}</label>
    </div>
  `
});

Vue.component('base-checkbox2', {
  props: {
    value: Boolean
  },
  template: `
    <div>
      <input
        type="checkbox"
        v-bind:checked="value"
        v-on:change="$emit('change', $event.target.checked)"
      >
      <label>{{ value }}</label>
    </div>
  `
});

new Vue({
  el: '#app',
  data: {
    lovingVue: false
  }
});
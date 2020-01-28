import Vue from 'vue';

var ComponentA = {
  props: ['customstyle'],
  template: `
    <div :style="customstyle">
      <h3>Component A</h3>
      <slot></slot>
    </div>
  `
};

var ComponentB = {
  props: ['customStyle'],
  template: `
    <div :style="customStyle">
      <h3>Component B</h3>
      <slot></slot>
    </div>
  `
};

new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
});

var ComponentA2 = {
  props: ['styleA', 'styleB'],
  components: {
    'component-b': ComponentB
  },
  template: `
    <div :style="styleA">
      <h3>Component A</h3>
      <component-b :custom-style="styleB">
        <slot></slot>
      </component-b>
    </div>
  `
};

new Vue({
  el: '#app2',
  components: {
    'component-a': ComponentA2
  }
});
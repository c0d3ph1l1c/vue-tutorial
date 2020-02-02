import Vue from 'vue';

Vue.component('unique-name-of-my-component', {
  props: ['level'],
  template: `
    <div>
      <h3>{{ level }}</h3>
      <unique-name-of-my-component 
        v-if="level != 0" 
        v-bind:level="level - 1"
      ></unique-name-of-my-component>
    </div>
  `
});

const myComponent = {
  name: 'my-component',
  props: ['level'],
  template: `
      <div>
        <h3>{{ level }}</h3>
        <my-component 
          v-if="level != 0" 
          v-bind:level="level - 1"
        ></my-component>
      </div>
    `
};

new Vue({
  el: '#app',
  components: {
    'my-component': myComponent
  }
});
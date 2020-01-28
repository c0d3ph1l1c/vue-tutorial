import ComponentA from './ComponentA.vue';
import ComponentC from './ComponentC.vue';

export default {
  components: {
    ComponentA, 
    ComponentC
  },
  template: `
    <div>
      <ComponentA></ComponentA>
      <ComponentC></ComponentC>
    </div>
  `
};
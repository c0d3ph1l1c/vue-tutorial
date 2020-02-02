export default {
  props: ['folder'],
  beforeCreate: function() {
    this.$options.components['tree-folder-contents'] = () => import('./tree-folder-contents.vue');
  },
  template: `
    <p>
      <span>{{ folder.name }}</span>
      <tree-folder-contents :children="folder.children"/>
    </p>
  `
};
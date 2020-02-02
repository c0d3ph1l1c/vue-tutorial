export default {
  props: ['children'],
  components: {
    'tree-folder': () => import('./tree-folder.vue')
  },
  template: `
    <ul>
      <li v-for="child in children">
        <tree-folder v-if="child.children" :folder="child" />
        <span v-else>{{ child.name }}</span>
      </li>
    </ul>
  `
};
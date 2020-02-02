import Vue from 'vue';

// const TreeFolder = ;
// const TreeFolderContents = ;

new Vue({
  el: '#app',
  data: {
    folder: {
      name: 'Level 1',
      children: [
        { name: 'Level 2-1'},
        { 
          name: 'Level 2-2', 
          children: [ 
            { name: 'Level 3-1'},
            { name: 'Level 3-2'}
          ]
        },
        { name: 'Level 2-3'},
      ]
    }
  },
  components: {
    'tree-folder': () => import('../../components/tree-folder.vue'),
    'tree-folder-contents': () => import('../../components/tree-folder-contents.vue')
  }
});
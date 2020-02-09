import Vue from 'vue';

/* 
  Wherever something can be easily accomplished in plain JavaScript, Vue render functions do not provide a proprietary alternative.

  <ul v-if="items.length">
    <li v-for="item in items">{{ item.name }}</li>
  </ul>
  <p v-else>No items found.</p>
 */

Vue.component('custom-list', {
  props: ['items'],
  render: function(createElement) {
    if(this.items.length) {
      return createElement('ul', this.items.map(function(item) {
        return createElement('li', item.name);
      }))
    } else {
      return createElement('p', 'No items found.');
    }
  } 
});

const items = [
      { id: 1, name: 'Item 1'},
      { id: 2, name: 'Item 2'},
      { id: 3, name: 'Item 3'},
      { id: 4, name: 'Item 4'},
      { id: 5, name: 'Item 5'}
    ];

new Vue({
  el: '#app',
  data: {
    items 
  },
  methods: {
    toggleList: function() {
      this.items = this.items.length? 
                    [] : items;
    }
  }
});
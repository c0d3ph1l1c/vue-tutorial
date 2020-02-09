import Vue from 'vue';

var EmptyList = {
  render: function(createElement) {
    return createElement('p', 
      'This is an empty list.'
    );  
  }
};

var TableList = {
  props: ['items'],
  template: `
      <table>
        <thead>
          <tr>
            <th
              v-for="(value, name) in items[0]"
              v-if="name != 'id'"
              v-bind:key="name"
            >
              {{ 
                name.charAt(0).toUpperCase() + 
                name.substring(1)
              }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            v-bind:key="item.id"
          >
            <td
              v-for="(value, name) in item"
              v-if="name != 'id'"
              v-bind:key="item.id + '-' + name"
            >
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
  `
};

var OrderedList = {
  props: ['items'],
  template: `
    <ol>
      <li
        v-for="item in items"
        v-bind:key="item"
      >
        {{ item }}
      </li>
    </ol>
  `
};

var UnorderedList = {
  props: ['items'],
  template: `
    <ul>
      <li
        v-for="item in items"
        v-bind:key="item"
      >
        {{ item }}
      </li>
    </ul>
  `
};

Vue.component('smart-list', {
  functional: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    isOrdered: Boolean
  },
  render: function(createElement, context) {
    function appropriateListComponent() {
      var items = context.props.items;

      if(items.length === 0)          return EmptyList;
      if(typeof items[0] === 'object')  return TableList;
      if(context.props.isOrdered)     return OrderedList;

      return UnorderedList;
    }

    return createElement(
      appropriateListComponent(),
      Object.assign({}, context.data, {
        props: context.props
      }),
      context.children
    );
  }
});

new Vue({
  el: '#app',
  data: {
    emptyList: [],
    tableList: [
      { id: 0, description: 'T-shirt', quantity: '20', price: '30'},
      { id: 1, description: 'Trouser', quantity: '40', price: '50'},
      { id: 2, description: 'Jacket', quantity: '10', price: '60'}
    ],
    list: [
      'Jacket',
      'Trouser',
      'T-shirt'
    ]
  }
});
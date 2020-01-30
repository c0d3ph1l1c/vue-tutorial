import Vue from 'vue';

Vue.component('text-document', {
  props: ['title'],
  data: function() {
    return {
      newTitle: ''
    }
  },
  methods: {
    onClick: function() {
      this.$emit('update:title', this.newTitle)
    }
  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <input v-model="newTitle">
      <button v-on:click="onClick">Change Title</button>
    </div>
  `
});

new Vue({
  el: '#app',
  data: {
    doc: {
      title: 'Title'
    }
  }
});

new Vue({
  el: '#app2',
  data: {
    doc: {
      title: 'Title'
    }
  }
});

new Vue({
  el: '#app3',
  data: {
    doc: {
      title: 'Title'
    }
  }
});


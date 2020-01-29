import Vue from 'vue';

Vue.component('blog-post', {
  props: {
    'title': { type: String },
    'content': { type: String },
    'author': { type: Object }
  },
  template: `
    <div class="blog-post">
      <h1>{{ title }}</h1>
      <div v-html="content"></div>
      <p>Author: {{ author.name }}, {{ author.company }}</p>
    </div>
  `
});

new Vue({
  el: '#app',
  data: {
    post: {
      id: 1,
      title: 'My journey with Vue',
      content: '<p>This article is about my journey with Vue</p>',
      author: {
        name: 'Venorica',
        company: 'Veridian Dynamics'
      }
    }
  }
});
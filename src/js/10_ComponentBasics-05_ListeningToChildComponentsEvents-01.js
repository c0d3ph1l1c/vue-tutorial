import Vue from 'vue';

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
});

new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      {
        id: 1,
        title: 'My journey with Vue',
        content: '<p>This article is about my journey with Vue</p>'
      }, 
      {
        id: 2,
        title: 'Blogging with Vue',
        content: '<p>This article is about my blogging with Vue</p>'
      }, 
      {
        id: 3,
        title: 'Why Vue is so fun',
        content: '<p>This article is about why Vue is so fun</p>'
      }
    ],
    postFontSize: 1
  }
});
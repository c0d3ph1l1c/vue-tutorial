import Vue from 'vue';

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h1>{{ post.id }}. {{ post.title }}</h1>
    </div>
  `
});

new Vue({
  el: '#app',
  data: {
    post: {
      id: 1,
      title: 'My Journey with Vue'
    }
  }
});
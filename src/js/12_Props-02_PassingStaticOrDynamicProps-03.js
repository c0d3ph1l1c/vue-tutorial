import Vue from 'vue';

const comments = [];
for(let i = 0; i <= 280; i++) {
  comments.push(`This is comment ${i}`);
}

Vue.component('blog-post', {
  data: function() {
    return {comments};
  },
  props: {
    'title': { type: String },
    'content': { type: String },
    'commentIds': { type: Array }
  },
  template: `
    <div class="blog-post">
      <h1>{{ title }}</h1>
      <div v-html="content"></div>
      <ul>
        <li v-for="id in commentIds">
          {{ comments[id] }}
        </li>
      </ul>
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
       commentIds: [234, 266, 273]
     }
   }
})
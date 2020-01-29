import Vue from 'vue';

Vue.component('blog-post', {
  props: {
    'title': { type: String },
    'content': { type: String },
    'isPublished': { type: Boolean}
  },
  template: `
    <div class="blog-post">
      <h1>{{ title }}</h1>
      <div v-html="content"></div>
      <button 
        class="isPublished" 
        @click="$emit('publish')"
      >
        Published: {{ isPublished }}
      </button>
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
      isPublished: false
    }
  }
});
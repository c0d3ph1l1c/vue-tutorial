import Vue from 'vue';

Vue.component('tab-home', {
  template: `
    <div class="tab">
      Home Component
    </div>
  `
});

Vue.component('tab-posts', {
  template: `
    <div class="tab">
      Posts Component
    </div>
  `
});

Vue.component('tab-archive', {
  template: `
    <div class="tab">
      Archive Component
    </div>
  `
});

new Vue({
  el: '#app',
  data: {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
});
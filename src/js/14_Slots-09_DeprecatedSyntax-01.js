import Vue from 'vue';

Vue.component('base-layout', {
  template: `
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
});

new Vue({
  el: '#app'
});
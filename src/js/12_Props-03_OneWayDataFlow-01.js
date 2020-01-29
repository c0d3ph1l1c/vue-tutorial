import Vue from 'vue';

var ClickCounter = {
  props: ['initialCounter'],
  data: function() {
    return {
      counter: this.initialCounter
    }
  },
  template: `
    <div>
      <button @click="counter++">
        You have clicked {{ counter }} times
      </button>
    </div>
  `
}

new Vue({
  el: '#app',
  components: {
    'click-counter': ClickCounter
  }
});

const SizeInput = {
  props: ['size'],
  computed: {
    normalizedSize: function() {
      return this.size.trim().toLowerCase();
    }
  },
  template: `
    <div>
      <input v-on:input="$emit('size-changed', $event.target.value)">
      <span>{{ normalizedSize }}</span>
    </div>
  `
};

new Vue({
  el: '#app2',
  data: {
    size: ''
  },
  components: {
    'size-input': SizeInput
  }
});
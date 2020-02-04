import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    isEditing: false
  }
});

new Vue({
  el: '#app2',
  data: {
    isEditing: false
  }
});

new Vue({
  el: '#app3',
  data: {
    docState: 'saved'
  }
});

new Vue({
  el: '#app4',
  data: {
    docState: 'saved'
  },
  computed: {
    buttonMessage: function() {
      switch(this.docState) {
        case 'saved': return 'Edit';
        case 'edited': return 'Save';
        case 'editing': return 'Cancel';
      }
    }
  }, 
  methods : {
    toggleState: function() {
      switch(this.docState) {
        case 'saved': this.docState = 'editing'; break;
        case 'edited': this.docState = 'saved'; break;
        case 'editing': this.docState = 'edited'; break;
      }
    }
  }
});
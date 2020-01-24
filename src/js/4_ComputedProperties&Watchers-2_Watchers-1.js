import Vue from 'vue';
import axios from 'axios';
import _ from 'lodash';

// Watcher is most useful when you want to perform asynchronous or expensive operations in response to changing data.

var watchExampleVM = new Vue({
  el: "#watch-example",
  data: {
    question: "",
    answer: "I cannot give you an answer until you ask a question!"
  },
  watch: {
    // whenever question changes, this function will run
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...';
      this.debounceGetAnswer(); 
    }
  },
  created: function() {
   /*  _.debounce is a function provided by lodash to limit how
    often a particularly expensive operation can be run.
    In this case, we want to limit how often we access
    yesno.wtf/api, waiting until the user has completely
    finished typing before making the ajax request. To learn
    more about the _.debounce function (and its cousin
    _.throttle), visit: https://lodash.com/docs#debounce */
    this.debounceGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function() {
      if(this.question.indexOf('?') === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = 'Thinking...';
      var vm = this;
      axios.get('https://yesno.wtf/api')
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error;
        })
    }
  }
});
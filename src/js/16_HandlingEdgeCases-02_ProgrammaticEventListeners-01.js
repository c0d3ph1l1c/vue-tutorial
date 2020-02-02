import Vue from 'vue';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

/* 
  Vue instances also offer other methods in its events interface. We can:
- Listen for an event with $on(eventName, eventHandler)
- Listen for an event only once with $once(eventName, eventHandler)
- Stop listening for an event with $off(eventName, eventHandler)
*/

new Vue({
  el: '#app',
  data: {
    startDate: null,
    endDate: null
  },
  mounted: function() {
    this.attachDatepicker('startDateInput');
    this.attachDatepicker('endDateInput');
  },
  methods:{
    attachDatepicker: function (refName) {
      var picker = new Pikaday({
        field: this.$refs[refName],
        format: 'YYYY-MM-DD'
      });
      
      this.$once('hook:beforeDestroy', function() {
        picker.destroy();
      });
    }
  }
});
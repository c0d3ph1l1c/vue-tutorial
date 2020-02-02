import Vue from 'vue';

Vue.component('google-map', {
  data: function() {
    return {
      map: null
    };
  },
  mounted: function() {
    this.map = new google.maps.Map(this.$el, {
      center: { lat: 0, lng: 0 },
      zoom: 1
    });
  },
  methods: {
    getMap: function(found) {
      var vm = this;
      function checkForMap() {
        if(vm.map) {
          found(vm.map);
        } else {
          setTimeout(checkForMap, 50);
        }
      }
      checkForMap();
    }
  },
  template: '<div class="map"><slot></slot></div>'
});

Vue.component('google-map-marker', {
  props: ['places'],
  created: function() {
    var vm = this;
    vm.$parent.getMap(function(map) {
      vm.places.forEach(function(place) {
        new google.maps.Marker({
          position: place.position,
          map: map
        });
      });
    });
  },
  render(h) {
    return null;
  }
});

new Vue({
  el: '#app',
  data: {
    vueConfCities: [
      {
        name: 'Wrocław',
        position: {
          lat: 51.107885,
          lng: 17.038538
        }
      },
      {
        name: 'New Orleans',
        position: {
          lat: 29.951066,
          lng: -90.071532
        }
      }
    ]
  }
});
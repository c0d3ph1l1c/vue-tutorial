import Vue from 'vue';

var obj = {
  foo: 'bar'
};

Object.freeze(obj);

const vm = new Vue({
  el: '#app',
  data: obj
});
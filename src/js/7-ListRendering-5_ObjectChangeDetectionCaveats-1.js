import Vue from 'vue';

/* Vue does not allow dynamically adding new root - level reactive properties to an already created instance.However, it’ s possible to add reactive properties to a nested object using the Vue.set(object, propertyName, value) method. */
const vm = new Vue({
  el: '#app',
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
});

// setTimeout(() => Vue.set(vm.userProfile, 'age', 27), 2000);
setTimeout(() => vm.$set(vm.userProfile, 'age', 27), 2000);


/* Sometimes you may want to assign a number of new properties to an existing object,
for example using Object.assign() or _.extend().In such cases, you should create a fresh object with properties from both objects.So instead of */

// setTimeout(() => {
//   Object.assign(vm.userProfile, {
//     age: 28,
//     favouriteColor: 'Vue Green'
//   });
// }, 4000);

/* You would add new, reactive properties with: */

setTimeout(() => {
  vm.userProfile = Object.assign({}, vm.userProfile, {
    age: 28, 
    favouriteColor: 'Vue Green'
  })
}, 4000);
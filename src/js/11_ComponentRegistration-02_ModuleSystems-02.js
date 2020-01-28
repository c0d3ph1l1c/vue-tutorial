import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requiredComponent = require.context(
  // The relative path of the components folder
  '../../components/',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Component[A-Z]\.(vue|js)$/
);

requiredComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requiredComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );

  // Register component globally
  // When defining a component with PascalCase, you can use either case when referencing its custom element. That means both <my-component-name> and <MyComponentName> are acceptable. Note, however, that only kebab-case names are valid directly in the DOM (i.e. non-string templates).
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

new Vue({
  el: '#app'
})
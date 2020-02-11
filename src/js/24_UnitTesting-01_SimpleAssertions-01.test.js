// Import `shallowMount` from Vue Test Utils and the component being tested
import { shallowMount } from '@vue/test-utils';
import MyTestComponent from '../../components/MyTestComponent.vue';

// Mount the component
const wrapper = shallowMount(MyTestComponent);

// Here are some Jest tests, though you can
// use any test runner/assertion library combo you prefer
describe('MyTestComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof MyTestComponent.created).toBe('function');
  });

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof MyTestComponent.data).toBe('function');
    const defaultData = MyTestComponent.data();
    expect(defaultData.message).toBe('hello!');
  });

  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    expect(wrapper.vm.$data.message).toBe('bye!');
  });

  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    expect(wrapper.text()).toBe('bye!');
  });
});


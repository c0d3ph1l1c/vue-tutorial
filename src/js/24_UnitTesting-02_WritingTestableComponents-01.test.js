import { shallowMount } from '@vue/test-utils';
import MyTestComponent2 from '../../components/MyTestComponent2.vue';

// helper function that mounts and returns the rendered component
function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData
  });
}

describe('MyTestComponent2', () => {
  it('renders correctly with different props', () => {
    expect(
      getMountedComponent(MyTestComponent2, {
        msg: 'Hello'
      }).text()
    ).toBe('Hello');

    expect(
      getMountedComponent(MyTestComponent2, {
        msg: 'Bye'
      }).text()
    ).toBe('Bye');
  });
});
import { shallowMount } from '@vue/test-utils';
import MyTestComponent2 from '../../components/MyTestComponent2.vue';

// Inspect the generated HTML after a state update
describe('MyTestComponent2', () => {
  it('updates the rendered message when wrapper.message updates', async () => {
    const wrapper = shallowMount(MyTestComponent2);
    wrapper.setData({ msg: 'foo' });

    // Wait a "tick" after state change before asserting DOM updates
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toBe('foo'); 
  });
});
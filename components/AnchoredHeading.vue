export default {
  props: ['level'],
  render: function(createElement) {
    return createElement(
      'h' + this.level,
      this.$slots.default
    );
  }
}

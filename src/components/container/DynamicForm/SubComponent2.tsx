import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SubComponent2 extends Vue {
  render() {
    return (
      <div>
        <span>子组件2</span>
      </div>
    );
  }
}

import { TabNav } from './TabNav';

export const Tab = () => null;

export class Tabs extends Component {
  state = { selectedIndex: 0 }

  changeTab = (selectedIndex) => {
    this.setState({ selectedIndex });
  }

  render() {
    const { selectedIndex } = this.state;
    const children = this.props.children
      .filter(child => child.type === Tab);

    const titles = children.map(el => el.props.title);
    const content = children.map(el => el.props.children);

    return (
      <div>
        <TabNav
          list={titles}
          select={this.changeTab}
        />

        <div className="tab">
          {content[selectedIndex]}
        </div>
      </div>
    );
  }
}

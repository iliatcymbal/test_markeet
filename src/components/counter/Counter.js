import './counter.scss';

export class Counter extends Component {
  state = {
    counter: 0,
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <>
        <button
          className="counter"
          onClick={this.clickHandler}
        >
          Click
        </button>
        <span>{counter}</span>
      </>
    );
  }
}

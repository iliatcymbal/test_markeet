import './inputText.scss';

export class InputText extends Component {
  static defaultProps = {
    deactivate: _ => _,
    text: '',
    active: false,
    activate: _ => _
  }

  constructor(opts) {
    super(opts);

    this.inputEl = React.createRef();
    this.textEl = React.createRef();

    this.state = {
      inputText: this.props.text,
      inputActive: this.props.active
    };
  }

  change = ({ target }) => {
    this.setState({ inputText: target.value });
  }

  switchField = () => {
    this.setState( { inputText: this.props.text });
  }

  blur = () => {
    this.switchField();
    this.props.deactivate(this.state.inputText);
  }

  click = () => {
    if (!this.props.activate(this.props.id)) {
      this.switchField();
    }
  }

  keyUp = ({ keyCode }) => {
    if (keyCode === 13) {
      this.switchField();
      this.props.deactivate(this.state.inputText);
    }
  }

  getSpanWidth() {
    const active = this.state.inputActive || this.props.active;
    if (active && this.textEl.current) {
      return this.textEl.current.getBoundingClientRect().width * 1.2;
    }

    return 'auto';
  }

  render() {
    const { inputText } = this.state;
    const width = `${this.getSpanWidth()}px`;
    const { textClassName, active } = this.props;

    return (
      <span className="input-text">
        {!active ?
          <span
            onClick={this.click}
            ref={this.textEl}
            className={textClassName}
          >
            {this.props.text}
          </span> :
          <input
            type="text"
            value={inputText}
            onChange={this.change}
            onBlur={this.blur}
            onKeyUp={this.keyUp}
            ref={this.inputEl}
            autoFocus
            style={{ width }}
          />
        }
      </span>
    );
  }
}

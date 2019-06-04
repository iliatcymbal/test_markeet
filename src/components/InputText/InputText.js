import './inputText.scss';

export class InputText extends Component {
  static defaultProps = {
    deactivate: _ => _,
    text: '',
  }

  inputEl = React.createRef();
  textEl = React.createRef();

  state = {
    inputText: this.props.text,
    inputActive: this.props.active
  };

  componentDidUpdate(prevProps) {
    const { text, active } = this.props;

    if (prevProps.text !== text) {
      this.setState({ inputText: this.props.text });
    }

    if (prevProps.active !== active) {
      this.setState({ inputActive: active });
    }
  }

  change = ({ target }) => {
    this.setState({ inputText: target.value });
  }

  switchField = () => {
    this.setState( { inputActive: !this.state.inputActive });
  }

  blur = () => {
    this.switchField();
    this.props.deactivate(this.state.inputText);
  }

  click = () => {
    const { click } = this.props;

    if (click) return click(this.state.inputText);

    this.switchField();
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
      return this.textEl.current.getBoundingClientRect().width;
    }

    return 'auto';
  }

  render() {
    const { inputText, inputActive } = this.state;
    const width = `${this.getSpanWidth()}px`;
    const { textClassName, textarea, placeholder } = this.props;
    const inputProps = {
      value: inputText,
      onChange: this.change,
      onBlur: this.blur,
      onKeyUp: this.keyUp,
      ref: this.inputEl,
      autoFocus: true,
      style: { width },
      placeholder,
    };

    return (
      <span className="input-text">
        {!inputActive ?
          <span
            onClick={this.click}
            ref={this.textEl}
            className={textClassName}
          >
            {inputText || placeholder}
          </span> :
          textarea ? <textarea {...inputProps} /> : <input {...inputProps} type="text" />
        }
      </span>
    );
  }
}

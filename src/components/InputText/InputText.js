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

  componentDidUpdate({ text: prevText, active: prevActive }) {
    const { text, active } = this.props;

    if (prevText !== text) {
      this.setState({ inputText: this.props.text });
    }

    if (prevActive !== active) {
      this.setState({ inputActive: active });
    }
  }

  change = ({ target }) => {
    this.setState({ inputText: target.value });
  }

  switchField = () => {
    this.setState({ inputActive: !this.state.inputActive });
  }

  blur = () => {
    const { deactivate } = this.props;
    const { inputText } = this.state;

    this.switchField();
    deactivate(inputText);
  }

  click = () => {
    const { click } = this.props;
    const { inputText } = this.state;

    if (click) return click(inputText);

    this.switchField();
  }

  keyUp = ({ keyCode }) => {
    const { deactivate } = this.props;
    const { inputText } = this.state;

    if (keyCode === 13) {
      this.switchField();
      deactivate(inputText);
    }
  }

  getSpanWidth() {
    const { inputActive } = this.state;
    const { active } = this.props;

    const activeInput = inputActive || active;
    if (activeInput && this.textEl.current) {
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

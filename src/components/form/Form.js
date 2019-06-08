import './form.scss';

export class Form extends Component {
  static defaultProps = {
    data: {},
    disabledFields: [],
    ignored: []
  }

  fields = [
    { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
    { label: 'firstName', reg: /^[^ ]{3,20}$/ },
    { label: 'lastName', reg: /^[^ ]{3,20}$/ },
    { label: 'password', reg: /^[^ ]{6,20}$/, secure: true }
  ];

  state = this.fields.reduce((acc, item) => ({
      ...acc,
      [item.label]: { value: this.props.data[item.label] || '', error: '' }
    }),
    {})

  // state = { email: { value: '', error: '' } } }

  changeField = ({ target }) => {
    // eslint-disable-next-line
    const value = target.hasOwnProperty('checked') ? target.checked : target.value;

    this.setState({ [target.name]: { value, error: '' } });
  }

  validateField = (e, index) => {
    const { ignored } = this.props;

    const field = this.fields[index];
    const stateField = this.state[field.label];
    const isEmpty = stateField.value.length === 0;

    if (isEmpty && ignored.includes(field.label)) return;

    if (isEmpty) {
      this.setState({
        [field.label]: { ...stateField, error: 'This field is required' }
      });

      return;
    }

    if (!field.reg.test(stateField.value)) {
      this.setState({
        [field.label]: { ...stateField, error: 'This field is wrong' }
      });
    }
  }

  onSubmit = (event) => {
    const { handleSubmit } = this.props;

    const data = Object
      .entries(this.state)
      .reduce((acc, [key, item]) => ({ ...acc, [key]: item.value }), {});

    event.preventDefault();
    handleSubmit(data);
  }

  getDisabledState() {
    const { ignored } = this.props;

    return Object.entries(this.state)
      .filter(([key, item]) => item.value || !ignored.includes(key))
      .some(([key, item]) => !item.value || item.error);
  }

  render() {
    const { disabledFields } = this.props;

    return (
      <form className="form" onSubmit={this.onSubmit}>

        {
          this.fields.map(({ label, secure }, index) => {
            const state = this.state[label];

            return (
              <p key={label}>
                <input
                  type={secure ? 'password' : 'text'}
                  name={label}
                  placeholder={`Enter a ${label}`}
                  value={state.value}
                  onChange={this.changeField}
                  onBlur={e => this.validateField(e, index)}
                  className={state.error ? 'error' : 'correct'}
                  disabled={disabledFields.includes(label)}
                />
                {state.error && <mark>{state.error}</mark>}
              </p>
            );
          })
        }

        <input type="submit" value="Save" disabled={this.getDisabledState()} />

      </form>
    );
  }
}

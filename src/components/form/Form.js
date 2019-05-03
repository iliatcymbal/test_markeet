import './form.scss';

export class Form extends Component {
  fields = [
    { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
    { label: 'name', reg: /^[^ ]{3,20}$/ },
    { label: 'surname', reg: /^[^ ]{3,20}$/ },
    { label: 'password', reg: /^[^ ]{6,20}$/, secure: true }
  ];

  state = this.fields.reduce((acc, item) => ({
    ...acc,
    [item.label]: { value: '', error: '' } }),
    {})

  // state = { email: { value: '', error: '' } } }


  changeField = ({ target }) => {
    const value = target.hasOwnProperty('checked') ? target.checked : target.value;

    this.setState({ [target.name]: { value, error: '' } });
  }

  validateField = ({ target }, index) => {
    const field = this.fields[index]
    const stateField = this.state[field.label];

    if (stateField.value.length === 0) {
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
    event.preventDefault();
    console.log(this.state);
  }

  getDisabledState() {
    return Object.values(this.state)
      .some(state => !state.value || state.error);
  }

  render() {
    const {  disabledFields = [] } = this.props;

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
            )
          })
        }

        <input type="submit" value="Save" disabled={this.getDisabledState()} />

      </form>
    );
  }
}

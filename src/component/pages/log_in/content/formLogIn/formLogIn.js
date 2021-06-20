import React from 'react';
import Formitem from '../../../../general/form/formContactItem.js';
import Title from '../../../../general/title/title.js'
import './formLogIn.css'


class FormLogIn extends React.Component{
  constructor(props) {
    super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.state = { displayMessage: null };
  }
  handleInputChange(event) {
    console.log(this.state);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

login() {
    fetch('/logIn',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": this.state.email, "password": this.state.password })
      })
      .then(res => res.json())
      .then(json => {
        if (json.res === true) {
          window.location.replace("/home");
        } else {
          this.setState({ displayMessage: json.res })
        }
      }
      );
  }

  render() {

    const formComponents = this.props.data.map(item =>
        <Formitem
          cName = {item.cName}
          labelfor = {item.labelfor}
          labeltitle = {item.labeltitle}
          inputtype = {item.inputtype}
          inputcName = {item.inputcName}
          placeholder = {item.placeholder}
          name = {item.name}
          handleChange = {this.handleInputChange}
         />)

    const err = this.state.displayMessage !== null ? (<div className="form-login-error">{this.state.displayMessage}</div>) : (<></>)

    return (
      <div className="col-6 p-5">
      <Title title="התחברות לאתר" className="mb-5" />
        {formComponents }
        <div class="form-group form-check float-right">
          <label class="form-check-label">
          <input class="form-check-input ml-1" type="checkbox" name="remember" required /> זכור אותי
          </label>
        </div>
        <button onClick={() => this.login()} type="submit" id="submit" className="mt-3 mb-5 float-left btn btn-secondary">שלח</button>
         { err}
      </div>
    );
  }
}
export default FormLogIn

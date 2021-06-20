import React from 'react';
import Formitem from '../../../../general/form/formContactItem.js';
import Title from '../../../../general/title/title.js';
import './formSignUp.css';


class FormSignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = { displayMessage: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    fetch('/signUp',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": this.state.email, "pwd": this.state.pwd, "lname": this.state.lname, "fname": this.state.fname, "phone": this.state.phone })
      })
      .then(res => res.json())
      .then(json => {
        if (json.res !== true) {
          this.setState({ displayMessage: json.res })
        }
      }
      );
  }

  render() {
    const err = this.state.displayMessage !== null ? (<p>{this.state.displayMessage}</p>) : (<div></div>)

    const formComponents = this.props.data.map(item =>
        <Formitem
          cName = {item.cName}
          labelfor = {item.labelfor}
          labeltitle = {item.labeltitle}
          inputtype = {item.inputtype}
          inputcName = {item.inputcName}
          placeholder = {item.placeholder}
          name = {item.labelfor}
          handleChange={this.handleInputChange}
         />)
    return (
      <div className="col-6 p-5 ">
      <Title title="הרשמה לאתר" className="mb-5" />
        {formComponents }
        <button onClick={() => this.handleSubmit()} type="submit" id="submit" className="mt-3 mb-5 float-left btn btn-secondary">שלח</button>
        {err}
      </div>
    );
  }
}
export default FormSignUp

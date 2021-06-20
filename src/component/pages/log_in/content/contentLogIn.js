import React from 'react';
import ReactDOM from 'react-dom';
import FormLogIn from  './formLogIn/formLogIn.js';
import './contentLogIn.css';

class ContentLogIn extends React.Component{
  constructor() {
    super();
}
  render() {


    return (
      <div className="row">
        <FormLogIn data = {this.props.data} />
        <img className="logimg col-6 p-5" src={"../../../../../../images/logInImage.jpeg"} alt="" />
      </div>
    );
  }
}
export default ContentLogIn

import React from 'react';
import ReactDOM from 'react-dom';
import FormSignUp from  './formSignUp/formSignUp.js';
import './contentSignUp.css';

class ContentSignUp extends React.Component{
  constructor() {
    super();
}
  render() {


    return (
      <div className="row">
        <FormSignUp data = {this.props.data} />
        <img className="signimg col-6 p-5" src={"../../../../../../public/images/p11.jpg"} alt="" />
      </div>
    );
  }
}
export default ContentSignUp

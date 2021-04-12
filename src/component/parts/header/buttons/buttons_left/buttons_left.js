import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import SignUp from './sign_up.js';
import LogIn from './log_in.js';
import './buttons_left.css'

class Buttonsleft extends React.Component{

  render(){
    return(
    <div className="col-4 bleft">
      <SignUp />
      <LogIn />
    </div>
    )
  }
}

export default Buttonsleft;

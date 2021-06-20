import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import './sign_up.css';

class SignUp extends React.Component{

  render(){
    return(
      <div>
       <Button className="button4"  size="lg">
        <a  href="signUp">
         <b>Sign Up</b>
        </a>
      </Button>
    </div>
    )
  }
}

export default SignUp;

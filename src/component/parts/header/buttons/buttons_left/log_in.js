import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import './log_in.css' ;

class LogIn extends React.Component{

  render(){
    return(
      <div>
       <Button className="button3" size="lg">
        <a  href="logIn">
         <b>log in</b>
        </a>
      </Button>
    </div>
    )
  }
}
export default LogIn;

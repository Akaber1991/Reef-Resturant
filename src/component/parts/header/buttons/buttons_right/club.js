import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import './club.css' ;

class Club extends React.Component{

  render(){
    return(
      <div>
       <Button className="button2"  size="lg">
        <a  href="#">
         <b>Club card</b>
        </a>
      </Button>
    </div>
    )
  }
}
export default Club;

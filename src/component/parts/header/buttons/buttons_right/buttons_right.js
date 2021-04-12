import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Order from './order.js';
import Club from './club.js';
import './buttons_right.css'

class ButtonsRight extends React.Component{

  render(){
    return(
    <div className="bright col-4">
      <Order />
      <Club />
    </div>
    )
  }
}

export default ButtonsRight;

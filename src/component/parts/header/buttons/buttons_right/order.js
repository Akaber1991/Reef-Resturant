import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import './order.css' ;

class Order extends React.Component{

  render(){
    return(
      <div>
       <Button className="button1"  size="lg">
        <a  href="order">
         <b>הזמנה דרך האתר</b>
        </a>
      </Button>
    </div>
    )
  }
}
export default Order;

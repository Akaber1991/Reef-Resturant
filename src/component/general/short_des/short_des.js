import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import './short_des.css';

class ShortDesc extends React.Component{
  render(){
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default ShortDesc;

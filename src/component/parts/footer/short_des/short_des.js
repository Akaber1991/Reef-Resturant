import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import  './short_des.css';


class ShortDesc extends React.Component{

  render(){
    return(
      <Card className="cardcontact container-fluid">
        <Card.Body>
          <Card.Title>{this.props.item.title}</Card.Title>
          <Card.Text>
          {this.props.item.contact.map((item) =>{
            return(
            <p><i class={item.icon}></i> {item.title}</p>)})}
            <p className="social-icons justify-content-center">
              {this.props.item.socialmedia.map((item) =>{
                return(
                <a href={item.herf}><i class={item.icon}></i></a>)})}
                <img className={this.props.item.img.class} src={this.props.item.img.src} alt={this.props.item.img.alt} />
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default ShortDesc;

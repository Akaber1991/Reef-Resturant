import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';



class CarouselItem extends React.Component{
constructor(props){
super(props);
}
render() {

return(

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={this.props.item.imgsrc}
        alt={this.props.item.alt}
      />
      <Carousel.Caption>
        <h3>{this.props.item.title}</h3>
        <p>{this.props.item.caption}</p>
      </Carousel.Caption>
    </Carousel.Item>
);
}
}



export default CarouselItem ;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel'
import Carouseljson from './picCarousel.js';
import './CarouselHome.css'


class CarouselHome extends React.Component{
  constructor(props){
    super(props);
  }
  render() {

    return (
      <Carousel fade className="col-11 d-block mx-auto mb-3">
      {this.props.data.map((item)=>{
        return(
          <Carousel.Item interval={3000}>
            <img src={item.imgsrc} />
            <Carousel.Caption>
            <h3 id="title">{item.title}</h3>
            <p id="caption">{item.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )})}
      </Carousel>

);
}
}

export default CarouselHome ;

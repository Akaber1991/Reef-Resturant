import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from './carouselItem.js';



class Carouselgen extends React.Component{
  render() {
    const Carouselgen = Carouseljson.map((jsonpart) =>(
    <CarouselItem item={jsonpart} />
  ));
    return (
  <div>
  <Carousel fade>
    {Carouselgen}
  </Carousel>
</div>
);
}
}

gent Carouselgen ;

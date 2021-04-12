import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import {CarouselItems} from './picCarousel';
import CarouselItem from './carouselitem';
import "./myCarousel.css";

class MyCarousel extends Component{
  constructor(props) {
      super(props)};
render(){
  const carouselitems=CarouselItems.map(oneitem=>
<CarouselItem key={this.props.id} src={this.props.imgsrc}/>)
  return(
    <Carousel>
      {carouselitems}
    </Carousel>

  );
 }
}

export default MyCarousel

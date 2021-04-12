import React from 'react';
import ReactDOM from 'react-dom';
import './carouselitem.css';

class CarouselItem extends React.Component{
  constructor(props) {
      super(props)};
  render(){
    return (

          <img className="pitem d-block w-100" key={this.props.id} src={this.props.imgsrc} />


    );
  }
}
export default CarouselItem

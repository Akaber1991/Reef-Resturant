import React from 'react';
import ReactDOM from 'react-dom';
import './carouselitem.css';

class CarouselItem extends React.Component{
  {constructor(props)
  super(props);}
  render(){
    return (
        <div className={this.props.imgClass}>
          <img
          className="d-block w-100"
          src={this.props.imgsrc}
          alt={this.props.imgalt}/>
          <div className="carousel-caption d-none d-md-block">
           <h4>{this.props.caption}</h4>
          </div>
        </div>
    );
  }
}
export default CarouselItem

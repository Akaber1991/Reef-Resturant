import React from 'react';
import ReactDOM from 'react-dom';
// import {CarouselItems} from './picCarousel';
// import CarouselItem from './carouselitem';
// import Carouselindicator from './carouselindicator';
// import "./carousel1.css";

class Carosel1 extends React.Component{
render(){
  const carouselitems=CarouselItems.map(oneitem=>
<CarouselItem
  className={oneitem.imgClass}
  src={oneitem.imgsrc}
  alt={oneitem.imgalt}
  caption={oneitem.caption}
  />
  )
  const carouselindicators=CarouselItems.map(oneitem=>
<Carouselindicator
  target={oneitem.indicators.target}
  slideto={oneitem.indicators.slideto}
  className={oneitem.indicators.indclassName}
  />
)

  return(
    <div className="card card-raised card-carousel">
        <div className="mycarousel carousel slide" data-ride="carousel" data-interval="3000">
          <ul className="carousel-indicators">
            {this.props.carouselindicators}
          </ul>
          <div className="carousel-inner">
           {this.props.carouselitems}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <i className="material-icons"></i>
            <span className="sr-only"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <i className="material-icons"></i>
            <span className="sr-only"></span>
          </a>
    </div>
  </div>

  );
 }
}

export default Carosel1

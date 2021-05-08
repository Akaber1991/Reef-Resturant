import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from '../../../../general/carousel/carouselItem.js';
import Carouseljson from './picCarousel.js';


class CarouselHome extends React.Component{
  render() {
    return (
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-100" src="../images/carousel/1.jpg" alt="First slide" />
    <div class="carousel-caption d-none d-md-block">
    <h4><b>SERENDIPITY</b></h4>
    <h5><b>Word of the Day</b></h5>
    <p>It refers to a happy and unexpected discovery.</p>
  </div>
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="../images/carousel/1.jpg" alt="Second slide" />
    <div class="carousel-caption d-none d-md-block">
    <h4><b>with/at the stroke of a pen</b></h4>
    <h5><b>Phrase of the Day</b></h5>
    <p>used to highlight that something important is done quickly & easily by signing a document.</p>
  </div>
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="../images/carousel/1.jpg" alt="Third slide" />
    <div class="carousel-caption d-none d-md-block">
    <h4><b>Food for thought</b></h4>
    <h5><b>Idiom of the Day</b></h5>
    <p>The term ‘food for thought’ may be used in context to say that one must consider thinking about something carefully and deeply.</p>
  </div>
  </div>
  </div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>



);
}
}

export default CarouselHome ;

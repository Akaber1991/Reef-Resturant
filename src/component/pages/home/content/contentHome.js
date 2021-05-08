import React from 'react';
import ReactDOM from 'react-dom';
import Sentence from "./sentence/sentence.js";
import Gallery from './gallery/gallery.js';
import VideoHome from './video/video.js';
import CarouselHome from './carousel/CarouselHome.js';
import './contentHome.css';

class ContentHome extends React.Component{
  render(){
    return(
      <div>
      <Sentence />
      <div className="row">
      <VideoHome className="col-6" />
      <CarouselHome className="col-6" />
      </div>
      <Gallery data={this.props.data} className="container col-12 justify-content-center"/>
      </div>
  )}
}
export default ContentHome;

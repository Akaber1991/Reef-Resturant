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
      <CarouselHome data={this.props.data.Carousel} />
      <Sentence />
      <VideoHome />
      <Gallery data={this.props.data.Gallery} />
      </div>
  )}
}
export default ContentHome;

import React from 'react';
import ReactDOM from 'react-dom';
import Sentence from "./sentence/sentence.js";
import Gallery from './gallery/gallery.js'
import VideoHome from './video/video.js'

class ContentHome extends React.Component{
  render(){
    return(
      <div>
      <Sentence />
      <VideoHome />
      <Gallery className="container col-12 justify-content-center"/>
      </div>
  )}
}
export default ContentHome;

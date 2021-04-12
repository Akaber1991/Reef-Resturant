import React from 'react';
import ReactDOM from 'react-dom';
import Masony from "react-masonry-component";
import {Photos} from './images';
import "./gallery.css";



class Gallery extends React.Component {
  render(){
    const picture = Photos.map(photo => (
      <li key={photo.key} className={`photo-item`}>
        <img src={photo.imgsrc}  />
      </li>)
    )
      const masonryOptions = {
        fitWidth: false ,
        columnWidth: 300,
        gutter: 30,
        itemSelector: ".photo-item",
      }

    return(
      <div>
        <Masony
          className={"photo-list"}
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >{picture}
        </Masony>
      </div>
    );
  }
}


export default Gallery;

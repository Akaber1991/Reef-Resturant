import React from 'react';
import ReactDOM from 'react-dom';
// import {ImagesMenu} from './imagesMenu';
import "./contentMenu.css";



class ContentMenu extends React.Component {
  render(){
    const picturesmenu = this.props.data.map(image => (
        <img key={image.key} src={image.imgsrc} className="m-2" />))
    return(
        <div className="imagesMenu col-12" >{picturesmenu}</div>
    );
  }
}


export default ContentMenu;

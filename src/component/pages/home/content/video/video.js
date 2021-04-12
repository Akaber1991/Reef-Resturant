import React from 'react';
import ReactDOM from 'react-dom';
import "./video.css";
import ReactPlayer from 'react-player';




class VideoHome extends React.Component{
  render(){
    return(
<div className='player-wrapper container col-6 mx-auto d-block  '>
<ReactPlayer className='react-player'
  playing controls={true}
  url={[
    {src: './video/V1-3.webm', type: 'video/webm'},
    {src: './video/V1-2.webm', type: 'video/ogg'},
    {src: './video/V1-1.mp4', type: 'video/mp4'}
  ]}
  width='100%'
  height='100%'
/>
</div>

  )}
};

export default VideoHome;

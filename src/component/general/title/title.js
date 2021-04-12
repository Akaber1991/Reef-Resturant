import React from 'react';
import ReactDOM from 'react-dom';
import './title.css';

class Title extends React.Component{
  constructor(props) {
  super(props);}
  render(){
    return(

       <h2 className="title container mx-aoto d-block">{this.props.title}</h2>

  )}
}
export default Title;

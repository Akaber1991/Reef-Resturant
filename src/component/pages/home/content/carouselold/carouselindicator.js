import React from 'react';
import ReactDOM from 'react-dom';
import './carouselindicator.css';

class Carouselindicator extends React.Component{
  render(){
    return (
      <li
        data-target={this.props.target}
        data-slide-to={this.props.slideto}
        className={this.props.indclassName}>
      </li>

    );
  }
}
export default Carouselindicator

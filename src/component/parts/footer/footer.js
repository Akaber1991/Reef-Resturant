import React from 'react';
import ReactDOM from 'react-dom';
import ShortDesc from './short_des/short_des';
import './footer.css';

class Footer extends React.Component{
  render(){
    return(
      <div>
      <ShortDesc className="container-fluid" />
      </div>
   )
  }
}

export default Footer;

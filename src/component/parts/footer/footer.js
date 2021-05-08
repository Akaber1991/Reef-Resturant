import React from 'react';
import ReactDOM from 'react-dom';
import ShortDesc from './short_des/short_des';
import './footer.css';
// import FooterJson from './short_des/short_des_json.js';

class Footer extends React.Component{
  render(){
    return(
      <div>
      <ShortDesc item={this.props.data} className="container-fluid" />
      </div>
   )
  }
}

export default Footer;

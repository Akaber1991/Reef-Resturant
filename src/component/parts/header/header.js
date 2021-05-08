import React from 'react';
import Navbar from "./navbar/navbar";
import BigLogoImage from "../../general/bigLogoImage/bigLogoImage";
import ButtonsRight from "./buttons/buttons_right/buttons_right";
import Buttonsleft from "./buttons/buttons_left/buttons_left";
import './header.css';


class Header extends React.Component{
  render(){
    return(
    <div className="header">
      <Navbar data = {this.props.data}/>
      <div className="row">
        <ButtonsRight  />
        <BigLogoImage  />
        <Buttonsleft  />
      </div>
    </div>
  )}
}
export default Header;

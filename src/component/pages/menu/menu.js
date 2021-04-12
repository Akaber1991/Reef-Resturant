import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import ContentMenu from './content/contentMenu.js'
import Footer from '../../parts/footer/footer.js';
import Title from '../../general/title/title.js'
import './menu.css';

class Menu extends React.Component{
  render(){
    return(
    <div>
      <Header />
      <Title title="התפריט" />
      <ContentMenu />
      <Footer />
    </div>
  )}
}
export default Menu;

import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Articalescards from './content/articales_cards.js';
import Footer from '../../parts/footer/footer.js';
import './Articles.css';

class ArticalesPage extends React.Component{
  render(){
    return(
      <div>
      <Header />
      <Articalescards />
      <Footer />
      </div>
  )}
}
export default ArticalesPage;

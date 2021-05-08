import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Businesscards from './content/Bus_cards.js';
import Footer from '../../parts/footer/footer.js';
import './Business.css';

class BusesPage extends React.Component{
  render(){
    return(
      <div>
      <Header />
      <Businesscards />
      <Footer />
      </div>
  )}
}
export default BusesPage;

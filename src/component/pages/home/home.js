import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import ContentHome from './content/contentHome.js';
import Footer from '../../parts/footer/footer.js';
import './home.css';

class Home extends React.Component{
  render(){
    return(
      <div>
      <Header />
      <ContentHome />
      <Footer />
      </div>
  )}
}
export default Home;

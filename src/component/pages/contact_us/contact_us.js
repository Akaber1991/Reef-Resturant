import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Form from './content/formContact';
import Footer from '../../parts/footer/footer.js';
import './contact_us.css';

class ContactUs extends React.Component{
  render(){
    return(
    <div>
      <Header />
      <Form />
      <Footer />
    </div>
  )}
}
export default ContactUs;

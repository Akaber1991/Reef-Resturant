import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Form from './content/formContact';
import Footer from '../../parts/footer/footer.js';
import './contact_us.css';

class ContactUsPage extends React.Component{
  constructor() {
    super();
    this.state = { data: [] };
  }
    componentDidMount() {
      fetch(`/contactus`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }

  render(){
    if(this.state.data.length == 0)
        return (<p>ops</p>)
    return(
    <div>
      <Header data = {this.state.data.Header} />
      <Form data = {this.state.data.Content} />
      <Footer data = {this.state.data.Footer} />
    </div>
  )}
}
export default ContactUsPage;

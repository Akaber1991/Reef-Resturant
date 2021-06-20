import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Businesscards from './content/Bus_cards.js';
import Footer from '../../parts/footer/footer.js';
import './Business.css';

class BusinessPage extends React.Component{
  constructor() {
    super();
    this.state = { data: [] };
  }
    componentDidMount() {
      fetch(`/business`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }

  render(){
    if(this.state.data.length == 0)
        return (<p>ops</p>)
    return(
      <div>
      <Header data = {this.state.data.Header} />
      <Businesscards data = {this.state.data.Content} />
      <Footer data = {this.state.data.Footer} />
      </div>
  )}
}
export default BusinessPage;

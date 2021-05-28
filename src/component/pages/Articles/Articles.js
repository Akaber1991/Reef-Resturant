import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Articalescards from './content/articales_cards.js';
import Footer from '../../parts/footer/footer.js';
import './Articles.css';

class ArticalesPage extends React.Component{
  constructor() {
    super();
    this.state = { data: [] };
  }
    componentDidMount() {
      fetch(`/articales`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }

  render(){
    if(this.state.data.length == 0)
        return (<p>ops</p>)
    return(
      <div>
      <Header data = {this.state.data.Header} />
      <Articalescards data = {this.state.data.Content} />
      <Footer data = {this.state.data.Footer} />
      </div>
  )}
}
export default ArticalesPage;

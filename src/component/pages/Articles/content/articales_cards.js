import React from "react";
import ReactDOM from 'react-dom';
import Articales from './cards_json';
import Card  from '../../../general/card/card.js';
import './articales_cards.css';

class Articalescards extends React.Component{
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
    const articales =this.state.data.map(oneitem=>
    <Card className="card" item={oneitem}/>
  );
  return(

      <div className="row mt-2 justify-content-center">
      {articales}
      </div>

     )
    }
  }
export default Articalescards

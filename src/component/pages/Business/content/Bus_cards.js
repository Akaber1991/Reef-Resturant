import React from "react";
import ReactDOM from 'react-dom';
import Meals from './Business_json';
import Card  from '../../../general/card/card.js';
import './Bus_cards.css';

class Businesscards extends React.Component{
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
    const meals =this.state.data.map(oneitem=>
    <Card className="card" item={oneitem}/>
  );
  return(

      <div className="row mt-2 justify-content-center">
      {meals}
      </div>

     )
    }
  }
export default Businesscards

import React from "react";
import ReactDOM from 'react-dom';
// import Meals from './Business_json';
import Card  from '../../../general/card/card.js';
import './Bus_cards.css';

class Businesscards extends React.Component{
  constructor() {
    super();
  }

  render(){
    const meals =this.props.data.map(oneitem=>
    <Card className="card ml-2" item={oneitem}/>
  );
  return(

      <div className="row m-5 justify-content-center">
      {meals}
      </div>

     )
    }
  }
export default Businesscards

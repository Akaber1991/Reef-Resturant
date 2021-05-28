import React from "react";
import ReactDOM from 'react-dom';
import Articales from './cards_json';
import Card  from '../../../general/card/card.js';
import './articales_cards.css';

class Articalescards extends React.Component{

  render(){
    const articales =this.props.data.map(oneitem=>
    <Card className="card ml-2" item={oneitem}/>
  );
  return(

      <div className="row m-5 justify-content-center">
      {articales}
      </div>

     )
    }
  }
export default Articalescards

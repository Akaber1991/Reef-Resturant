import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./component/pages/home/home";
import Story from "./component/pages/the_story/the_story";
import Menu from "./component/pages/menu/menu";
import ContactUs from "./component/pages/contact_us/contact_us";
import Comments from "./component/pages/comments/comments";


class App extends React.Component{
  render(){
    return(
    <BrowserRouter>
      <main>
       <switch>
         <Route path="/" component={Home} exact />
         <Route path="/story" component={Story} />
         <Route path="/menu" component={Menu} />
         <Route path="/contact" component={ContactUs} />
         <Route path="/comments" component={Comments} />



       </switch>
      </main>
    </BrowserRouter>
  )}
  }
  export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from "./component/pages/home/home";
import StoryPage from "./component/pages/the_story/the_story";
import MenuPage from "./component/pages/menu/menu";
import ContactUsPage from "./component/pages/contact_us/contact_us";
import CommentsPage from "./component/pages/comments/commentsPage";
import ArticalesPage from "./component/pages/Articles/Articles";
import BusinessPage from "./component/pages/Business/Business";
import SignUpPage from "./component/pages/sign_up/sign_up";
import LogInPage from "./component/pages/log_in/log_in";
import ManagementPage from "./component/pages/management/management";

import OrderPage from "./component/pages/order/order";
import ClubCardPage from "./component/pages/club_card/club_card";



class App extends React.Component{
  render(){
    return(
    <BrowserRouter>
      <main>
       <switch>
         <Route path="/" component={HomePage} exact />
         <Route path="/home" component={HomePage}  />
         <Route path="/story" component={StoryPage} />
         <Route path="/menu" component={MenuPage} />
         <Route path="/contact" component={ContactUsPage} />
         <Route path="/comments" component={CommentsPage} />
         <Route path="/articles" component={ArticalesPage} />
         <Route path="/bussiness" component={BusinessPage} />
         <Route path="/signUp" component={SignUpPage} />
         <Route path="/logIn" component={LogInPage} />
         <Route path="/management" component={ManagementPage} />


         // <Route path="/order" component={OrderPage} />
         // <Route path="/clubCard" component={ClubCardPage} />



       </switch>
      </main>
    </BrowserRouter>
  )}
  }
  export default App;

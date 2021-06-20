import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import ContentLogIn from './content/contentLogIn.js';
import Footer from '../../parts/footer/footer.js';
import './log_in.css';

class LogInPage extends React.Component{
  constructor() {
    super();
    this.state = { data: [] };
  }
    componentDidMount() {
      fetch(`/logIn`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }

  render(){
    if(this.state.data.length == 0)
        return <i class="fa fa-spinner"></i>;

    return(
      <div>
      <Header data = {this.state.data.Header} />
      <ContentLogIn data = {this.state.data.Content} />
      <Footer data = {this.state.data.Footer} />
      </div>
  )}
}
export default LogInPage;

import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import ContentManagement from './content/contentManagement.js';
import Footer from '../../parts/footer/footer.js';
import './management.css';

class ManagementPage extends React.Component{
  constructor() {
    super()
    this.state = { data: [] };
}
componentDidMount() {
    fetch('/management')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if(this.state.data.length == 0)
        return <i class="fa fa-spinner"></i>;

    return(
      <div>
       <Header data={this.state.data.Header}/>
       <ContentManagement data={this.state.data.Content}/>
       <Footer data={this.state.data.Footer}/>
      </div>
    )
  }
}


export default ManagementPage

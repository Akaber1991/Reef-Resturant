import React from 'react';
import Header from '../../parts/header/header.js';
import Contentcomment from './content/contentcomment.js';
import Footer from '../../parts/footer/footer.js';
import  './commentsPage.css'

class CommentsPage extends React.Component{
  constructor() {
    super()
    this.state = { data: [] };
}
componentDidMount() {
    fetch('/comments')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length==0)
       return (<p>error!</p>);
    return(
      <div className="container-fluid">
        <Header data={this.state.data.Header}/>
        <Contentcomment data={this.state.data.Content} picture_url={this.state.data.picture_url}/>
        <Footer data={this.state.data.Footer}/>
      </div>
    )
  }

}


export default  CommentsPage;

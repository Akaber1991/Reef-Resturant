import React from 'react';
import FormItems from './formContactItems.js';
import Formitem from './formContactItem.js'
import './formContact.css'


class Form extends React.Component{
  constructor() {
    super();
    this.state = { data: [] };
  }
    componentDidMount() {
      fetch(`/contactus`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }
  render() {
    const formComponents = FormItems.map(item =>
        <Formitem
          cName = {item.cName}
          labelfor = {item.labelfor}
          labeltitle = {item.labeltitle}
          inputtype = {item.inputtype}
          inputcName = {item.inputcName}
          placeholder = {item.placeholder}
          name = {item.name}
         />)
    return (
      <form action="#" className="col-5 mx-auto p-5">
      <h2>שלחו לנו הודעה</h2>
        {formComponents}
        <div class="form-group">
          <label for="msg">
            <b>הודעה:</b>
          </label>
          <textarea className="form-control" rows="5" id="msg" required></textarea >
          <button  type="submit" id="submit" class="mb-2 btn btn-secondary">שלח</button>
       </div>
      </form>
    );
  }
}
export default Form

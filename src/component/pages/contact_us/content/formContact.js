import React from 'react';
// import FormItems from './formContactItems.js';
import Formitem from '../../../general/form/formContactItem.js';
import Title from '../../../general/title/title.js'
import './formContact.css'


class Form extends React.Component{
  constructor() {
    super();
}
  render() {

    const formComponents = this.props.data.map(item =>
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
      <form action="#" className="col-5 mx-auto p-5 ">
      <Title title="שלחו לנו הודעה" className="mb-5" />
        {formComponents }
        <div className="form-group">
          <label  for="msg">
            <b className="labelformmsg">הודעה:</b>
          </label>
          <textarea className="form-control" rows="5" id="msg" required></textarea>
          <button type="submit" id="submit" className="mt-3 mb-5 float-left btn btn-secondary">שלח</button>
       </div>
      </form>
    );
  }
}
export default Form

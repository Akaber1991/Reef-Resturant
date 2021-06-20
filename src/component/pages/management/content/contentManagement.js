import React from 'react';
import TableVendor from './vendor/vendorTable.js';
import {bootstrap} from 'react-bootstrap';

class ContentManagement extends React.Component{
  render(){
    return(
      <div className="ml-5">
       <TableVendor data = {this.props.data} />
      </div>
  )}
}


export default ContentManagement;

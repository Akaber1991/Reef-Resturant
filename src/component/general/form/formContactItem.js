import React from "react";
import ReactDOM from 'react-dom';


class Formitem extends React.Component{
  render() {
    return (
      <div className={this.props.cName}>
        <label className="labelform" for={this.props.labelfor}>
          <b>{this.props.labeltitle}</b>
        </label>
        <input
         type={this.props.inputtype}
         className={this.props.inputcName}
         placeholder={this.props.placeholder}
         name={this.props.labelfor}
         onChange={this.props.handleChange}
         required
        />
      </div>
    )
  }
}
export default Formitem

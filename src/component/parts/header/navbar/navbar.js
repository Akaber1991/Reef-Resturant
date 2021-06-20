import React from 'react';
// import {MenuItems} from './menuitems';
import './navbar.css';

class Navbar extends React.Component {
  state={ clicked: false }

  handleClick = () =>{
  this.setState({ clicked: !this.state.clicked})
  }

  render(){
    return(
      <nav className="NavbarItems nav nav-pills justify-content-center fixed-top pt-4 col-12">
            <div className="menu-icon" onClick={this.handleClick }>
              <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-ioxhost'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active justify-content-center' : 'nav-menu justify-content-center'}>
              {this.props.data.map((item, index) =>{
                return (
                  <li className='nav-item' key={index}>
                    <a className={`${item.cName} btn`} href={item.url} >
                      <div dangerouslySetInnerHTML={{__html:item.title}}></div>
                    </a>
                  </li>
                )
              })}
           </ul>
      </nav>
          )
        }


}
export default Navbar

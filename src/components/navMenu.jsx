import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class NavMenu extends Component {

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="#home">Home</a>
        <a id="about" className="menu-item" href="#about">About</a>
        <a id="contact" className="menu-item" href="#contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="#settings">Settings</a>
      </Menu>
    );
  }
}

export default NavMenu;

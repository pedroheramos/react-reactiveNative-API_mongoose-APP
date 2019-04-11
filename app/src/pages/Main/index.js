import React, { Component } from 'react';

import logo from '../../assets/logo.png';
import './styles.css';

// import { Container } from './styles';

export default class Main extends Component {
  render() {
    return (
      <div id="main-container">
          <form action="">
            <img className="logo" src={logo} alt=""/>
            <input 
              placeholder="Criar um box"
            />
            <button type="submit">Criar</button>
          </form>
      </div>
    );
  }
}

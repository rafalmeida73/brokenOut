import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar, NavItem, Icon } from 'react-materialize';
import './styles.css';


class Games extends Component {

 constructor(props) {
  super(props);
  this.state = {
  };

 }

 render() {
  return(
   <h1>Jogos</h1>
  )
 }
}

export default Games;
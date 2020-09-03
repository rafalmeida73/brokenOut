import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';
import './styles.css';

class Home extends Component {

 constructor(props) {
  super(props);
  this.state = {
  };

 }


 render() {
  return (
   <div>
    <Navbar
  alignLinks="right"
  brand={ <Link to="/#" className="brand-logo"><img className="responsive-img" src={Logo} alt="Broken Out" /></Link>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem href="">
    Home
  </NavItem>
  <NavItem href="">
    Sobre
  </NavItem>
  <NavItem href="">
    Jogos
  </NavItem>
  <NavItem href="">
    entrar
  </NavItem>
  <NavItem href="">
    Registrar
  </NavItem>
</Navbar>
   </div>
  )
 }
}

export default Home;

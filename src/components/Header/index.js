import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';
import './styles.css';

function Home() {
  return (
    <div>
      <Navbar
        alignLinks="right"
        brand={<Link to="/#" className="brand-logo"><img className="responsive-img" src={Logo} alt="Broken Out" /></Link>}
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
        <Link to="/">
          Home
            </Link>

        <Link to="/sobre">
          Sobre
            </Link>

        <Link to="/jogos">
          Jogos
            </Link>

        <Link to='/login'>
          Entrar
            </Link>

        <Link to='/registrar'>
          Registrar
            </Link>

      </Navbar>
    </div>
  )
}

export default Home;

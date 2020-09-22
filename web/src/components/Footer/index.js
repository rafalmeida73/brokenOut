import React, { useEffect, useState } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Link } from 'react-router-dom';
import firebase from '../../fireConnection';



import Up from '../../assets/img/up.png'

function Footer() {
  const [is_visible] = useState(true);
  const [Logged, SetLogged] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(res =>{
      res = true;
      SetLogged(res)
    }).catch(res =>{
      SetLogged(false);
    })
  }, [])

function signOut() {
  firebase.signOut();
  SetLogged(false);
}

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div>
      <footer className="page-footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">BROKEN OUT</h5>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul>
                <li>
                  <Link className="white-text text-lighten-3" to="/">
                    Home
                      </Link>
                </li>
                <li>
                  <Link className="white-text text-lighten-3" to="/sobre">
                    Sobre
                      </Link>
                </li>
                <li>
                  <Link className="white-text text-lighten-3" to="jogos">
                    Jogos
                      </Link>
                </li>
                
                {!Logged && (
                  <li>
                    <Link className="white-text text-lighten-3" to="/login">
                      Entrar
                      </Link>
                  </li>
                )}
                {!Logged && (
                  <li>
                    <Link className="white-text text-lighten-3" to="/registrar">
                      Registrar
                      </Link>
                  </li>
                )}
                {Logged && (
                  <li>
                    <Link className="white-text text-lighten-3" onClick={signOut}>
                      Sair
                      </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="col l1 s4 right">
              {is_visible && (
                <div onClick={() => scrollToTop()}>
                  <img src={Up} alt="Voltar ao topo" width='150' />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container white-text">
            © 2020 Broken Out Copyright
            <a className="white-text text-lighten-4 right" href="https://logomakr.com"
              target="_blank" rel="noopener noreferrer">Created my free logo at
                LogoMakr.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
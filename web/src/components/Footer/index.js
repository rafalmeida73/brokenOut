import React, { Component } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Link } from 'react-router-dom';

import Up from '../../assets/img/up.png'

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
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
                  <li>
                    <Link className="white-text text-lighten-3" to="/login">
                      Entrar
                      </Link>
                  </li>
                  <li>
                    <Link className="white-text text-lighten-3" to="/registrar">
                      Registrar
                      </Link>
                  </li>
                </ul>
              </div>
              <div className="col l1 s4 right">
                {is_visible && (
                  <div onClick={() => this.scrollToTop()}>
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
}

export default Footer
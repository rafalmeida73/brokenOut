import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Poligono from '../../assets/img/poligono.svg';
import './styles.css';

class Benefits extends Component {

 constructor(props) {
  super(props);
  this.state = {
  };

 }


 render() {
  return (
   <div>

    <div className="col s12 m4 l4 benefitSBlock">
     <img src={Poligono} alt="" className="responsive-img" />
     <h4>TITULO</h4>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
    </div>
    <div className="col s12 m4 l4 benefitSBlock">
     <img src={Poligono} alt="" className="responsive-img"/>
     <h4>TITULO</h4>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
    </div>
    <div className="col s12 m4 l4 benefitSBlock">
     <img src={Poligono} alt="" className="responsive-img"/>
     <h4>TITULO</h4>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
    </div>
   </div>
  )
 }
}

export default Benefits;

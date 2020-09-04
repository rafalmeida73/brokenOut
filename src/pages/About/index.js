import React, { Component } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row } from 'react-materialize';
import Lottie from 'react-lottie';
import Team from '../../lotties/team.json';
import TeamProfile from '../../components/Team'

const defaultOptions = {
 loop: true,
 autoplay: true,
 animationData: Team,
 rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
 }
};

class About extends Component {

 constructor(props) {
  super(props);
  this.state = {

  };

 }


 render() {
  return (
   <div>

    <header className="headerSobre">
     <div className="col s12 m12 l12">
      <Lottie
       options={defaultOptions}
      />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit enim imperdiet blandit ultrices fermentum gravida pellentesque. Amet scelerisque mi id enim etiam adipiscing velit proin aliquet. Amet condimentum nibh amet semper ut integer sed facilisis. Lacus lorem nisl, tellus, dui convallis. In sit ut elementum at. Amet, orci nibh dignissim eget semper ac ullamcorper elit.</p>
     </div>
    </header>

    <div className='teamCard'>
     <div className="center-align">
      <h4>NOSSO TIME</h4>
     </div>

     <div>
      <Row>
       <TeamProfile />
      </Row>
     </div>

    </div>


   </div>
  )
 }
}

export default About;
import React from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row } from 'react-materialize';
import Lottie from 'react-lottie';
import Team from '../../lotties/team.json';
import TeamProfile from '../../components/Team';
import SocialIcons from '../../components/SocialIcons';
import SendEmail from '../../components/Email';

const defaultOptions = {
 loop: true,
 autoplay: true,
 animationData: Team,
 rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
 }
};

function About(){
  return (
   <div>

    <header data-aos='fade-right' className="headerSobre">
     <div className="col s12 m12 l12">
      <Lottie
       options={defaultOptions}
      />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit enim imperdiet blandit ultrices fermentum gravida pellentesque. Amet scelerisque mi id enim etiam adipiscing velit proin aliquet. Amet condimentum nibh amet semper ut integer sed facilisis. Lacus lorem nisl, tellus, dui convallis. In sit ut elementum at. Amet, orci nibh dignissim eget semper ac ullamcorper elit.</p>
     </div>
    </header>

    <div data-aos='fade-right' className="center-align socialIcons ">
     <SocialIcons />
    </div>

    <div data-aos='fade-right' className='teamCard'>
     <div className="center-align">
      <h4>NOSSO TIME</h4>
     </div>

     <div>
      <Row>
       <TeamProfile />
      </Row>
     </div>


     {/* <div data-aos="fade-up" className="center-align contact">

      <div className="col s12 m12 l12">
       <a href="">
        <div class="svg-wrapper">
         <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="60" width="320" />
         </svg>
         <div class="text">FALE CONOSCO!</div>
        </div>
       </a>
      </div>

     </div> */}

<div>
 
</div>

    </div>
<SendEmail/>

   </div>
  )
}

export default About;
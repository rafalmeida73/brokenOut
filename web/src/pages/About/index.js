import React, { useEffect } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row } from 'react-materialize';
import Lottie from 'react-lottie';
import Team from '../../lotties/team.json';
import TeamProfile from '../../components/Team';
import SocialIcons from '../../components/SocialIcons';
import SendEmail from '../../components/Email';
import AOS from 'aos';
import 'aos/dist/aos.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Team,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function About() {
  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, []);

  return (
    <div>

      <header data-aos='fade-right'  className="headerSobre">
        <div className="col s12 m12 l12">
          <Lottie
            options={defaultOptions}
          />

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit enim imperdiet blandit ultrices fermentum gravida pellentesque. Amet scelerisque mi id enim etiam adipiscing velit proin aliquet. Amet condimentum nibh amet semper ut integer sed facilisis. Lacus lorem nisl, tellus, dui convallis. In sit ut elementum at. Amet, orci nibh dignissim eget semper ac ullamcorper elit.</p>
        </div>
      </header>

      <div data-aos='fade-right'  className="center-align socialIcons ">
        <SocialIcons />
      </div>

      <div data-aos='fade-right'  className='teamCard'>
        <div className="center-align">
          <h4>NOSSO TIME</h4>
        </div>

        <div>
          <Row>
            <TeamProfile />
          </Row>
        </div>
      </div>


      <div data-aos='fade-right'  className="contact">
        <div className="center-align">
          <h4>FALE CONOSCO</h4>
        </div>
        <SendEmail />
      </div>

    </div>
  )
}

export default About;
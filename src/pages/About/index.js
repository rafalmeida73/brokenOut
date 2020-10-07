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

          <p>O projeto Broken Out foi criado no ano de 2020, os desenvolvedores criaram esse projeto a tentar ajudar os jogadores, com uma vasta seção de jogos as pessoas que tiver com dúvida sobre algo pode vir ao site procurar mais sobre, ter dicas e ajuda da comunidade naquele jogo desejado, os jogadores tem a liberdade de avaliações que ajudam na hora do usuário escolher se estiver em dúvida. O desenvolvimento durou 3 meses.</p>
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
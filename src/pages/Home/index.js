import React, { useEffect } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row } from 'react-materialize';
import Lottie from 'react-lottie';
import Robo from '../../lotties/robo.json';
import Benefits from '../../components/Benefits';

import Line from '../../assets/img/line.svg';
import Team from '../../assets/img/team.svg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: Robo,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
   }
};

function Home() {

   useEffect(() => {
      AOS.init({
         duration: 3000
      })
   }, []);


   return (
      <div>
         <div >

            <header data-aos='fade-right' className="headerBlock">
               <Row>
                  <div className="col s12 m12 l6 robotBlock">
                     <Lottie className='robo'
                        options={defaultOptions}
                     />
                  </div>

                  <div className="col s12 m12 l6">
                        <p>
                           O Broken Out é um site que visa facilitar o acesso a informações de jogos, seja do celular, console ou desktop.
                           Disponibilizamos uma imensa variedade de jogos cadastrados. Contudo, você pode adicionar qualquer jogo que não esteja cadastrado. Ajudando assim, outros usuários a encontrar o jogo desejado no site.
                        </p>

                        <Link to='/jogos' className="waves-effect waves-light btn">
                           Ver os jogos
                        </Link>
                  </div>
               </Row>
            </header>

            <div data-aos='fade-right' className="row center-align benefits">
               <Benefits />
            </div>

            <div className='line'>
               <img src={Line} alt="Linha" className="responsive-img" />
            </div>


            <Row data-aos='fade-right' className='teamBlock'>
               <div className="col s12 m6 l6">
                  <img src={Team} alt="Equipe" className="responsive-img" />
               </div>
               <div className="col s12 m6 l6">
                  <p>
                  Nossa equipe que desenvolveu esse fórum foi feito  devido ao projeto da faculdade, com 4 alunos do grupo criamos esse projeto que visa em um fórum de ajuda aos jogadores. O grupo vem criando outros tipos de projetos a 3 semestres. O nosso projeto Broken Out tem o objetivo de ficar um bom tempo online devido a quantidade de jogadores que buscam, tem dúvidas ou dificuldade em alguns tipos de jogos com dificuldade avançada, e que tenham dúvidas no qual escolher ou que apenas deseja se informar melhor sobre determinado jogo.
                  </p>

                  <Link to='/sobre' className="waves-effect waves-light btn">
                     Saber mais
                  </Link>
               </div>
            </Row>

         </div>
      </div>
   )
}

export default Home;

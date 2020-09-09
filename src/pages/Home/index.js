import React, { useEffect } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row } from 'react-materialize';
import Lottie from 'react-lottie';
import Robo from '../../lotties/robo.json';
import Benefits from '../../components/Benefits';

import Line from '../../assets/img/line.svg';
import Fall from '../../assets/img/fall.jpeg';
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

   useEffect(()=>{
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
                        <div className="sla">
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit enim imperdiet blandit ultrices fermentum gravida pellentesque. Amet scelerisque mi id enim etiam adipiscing velit proin aliquet. Amet condimentum nibh amet semper ut integer sed facilisis. Lacus lorem nisl, tellus, dui convallis. In sit ut elementum at. Amet, orci nibh dignissim eget semper ac ullamcorper elit.
                        </p>

                           <Link to='/' className="waves-effect waves-light btn">
                              Ver os jogos
                     </Link>
                        </div>
                     </div>
                  </Row>
               </header>

               <div data-aos='fade-right' className="row center-align benefits">
                  <Benefits />
               </div>

               <div className='line'>
                  <img src={Line} alt="Linha" className="responsive-img"/>
               </div>


               <Row data-aos='fade-right' className='teamBlock'>
                  <div className="col s12 m6 l6">
                     <img src={Team} alt="Equipe" className="responsive-img" />
                  </div>
                  <div className="col s12 m6 l6">
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                     <Link to='/sobre' className="waves-effect waves-light btn">
                        Saber mais
                     </Link>
                  </div>
               </Row>


               <div data-aos='fade-right' className='freeGames container'>
                  <h3>Jogos gratuitos</h3>

                  <div className="imgGames">


                     <div className="row center-align">
                        <div className="col s12 m3 l3 imgBlock">
                           <Link to=''>
                              <img src={Fall} alt="" className="responsive-img" />
                           </Link>
                        </div>
                        <div className="col s12 m3 l3 imgBlock">
                           <Link to=''>
                              <img src={Fall} alt="" className="responsive-img" />
                           </Link>
                        </div>
                        <div className="col s12 m3 l3 imgBlock">
                           <Link to=''>
                              <img src={Fall} alt="" className="responsive-img" />
                           </Link>
                        </div>
                        <div className="col s12 m3 l3 imgBlock">
                           <Link to=''>
                              <img src={Fall} alt="" className="responsive-img" />
                           </Link>
                        </div>

                     </div>

                  </div>
               </div>

            </div>
         </div>
      )
   }

export default Home;

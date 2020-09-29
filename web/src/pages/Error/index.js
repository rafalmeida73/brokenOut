import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import './styles.css';
import Lottie from 'react-lottie';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NotFound from '../../lotties/404.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NotFound,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function Error() {
  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, []);

  return (
    <div>
      <header data-aos="zoom-out-up" className='center-align notFoundBlock'>
        <div className="col s12 m12 l12">

          <Lottie className='404'
            options={defaultOptions}
          />
          <h2>Página não encontrada!</h2>

        </div>
      </header>

    </div>
  )
}


export default Error;
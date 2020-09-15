import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row, TextInput, Icon, Button } from 'react-materialize';
import Alert from '@material-ui/lab/Alert';
import Lottie from 'react-lottie';
import Controle from '../../lotties/controle.json';
import { useForm } from "react-hook-form";
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';


const defaultOptions8 = {
  loop: true,
  autoplay: true,
  animationData: Controle,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


function SingUp() {

  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, []);



  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };


  return (
    <div>
      <header className="signUpBlock">
        <div>

          <Row>

            <div data-aos='fade-right' className="col s12 m12 l5 controlBlock">
              <Lottie className='control'
                options={defaultOptions8}
              />
            </div>
            <div data-aos='fade-left' className="col s12 m12 l7">

              <div className="errorBlock">
                {errors.name || errors.email ? (
                  <Alert variant="filled" severity="warning">
                    Por favor, preencha todos os campos!
                  </Alert>
                ) : ''}

                {errors.password && (

                  <Alert variant="filled" severity="error">
                    Senha fraca!
                  </Alert>
                )}

                {/* <Alert variant="filled" severity="error">
         E-mail já está em uso!
       </Alert>

        <Alert variant="filled" severity="success">
         Registro completo!
        <Link to="/login">
          FAZER LOGIN
        </Link>
        </Alert> */}
              </div>




              <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                  icon={<Icon>account_circle</Icon>}
                  id="name"
                  name="name"
                  label="Nome"
                  validate
                  ref={register({ required: true })}
                />


                <TextInput
                  icon={<Icon>email</Icon>}
                  email
                  id="email"
                  name="email"
                  label="Email"
                  validate
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    },
                  })}
                />
                <div>
                </div>

                <TextInput
                  icon={<Icon>lock_outline</Icon>}
                  id="password"
                  name="password"
                  label="Senha"
                  type="password"
                  validate
                  ref={register({ minLength: 5, required: true })}
                />

                <Button node="button" type="submit" waves="light">
                  Registrar
          <Icon right>
                    send
          </Icon>
                </Button>
              </form>
            </div>

          </Row>
        </div>
      </header>
    </div>
  )
}


export default SingUp;
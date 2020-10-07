import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row, TextInput, Icon, Button } from 'react-materialize';
import Alert from '@material-ui/lab/Alert';
import Lottie from 'react-lottie';
import Robot from '../../lotties/robo.json';
import { useForm } from "react-hook-form";
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import firebase from '../../fireConnection';
import { Redirect } from 'react-router-dom';


const defaultOptions8 = {
  loop: true,
  autoplay: true,
  animationData: Robot,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


function Login() {
  const [wrongPassword, SetWrongPassword] = useState(false);
  const [UserNotFound, SetUserNotFound] = useState(false);
  const [Logged, SetLogged] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 3000
    })

  }, []);



  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
   
    firebase.login(data.email, data.password)
      .then((authData) => {
        SetLogged(true);
      }).catch((error) => {
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
          SetWrongPassword(true);
          SetUserNotFound(true);
        }
        else {
          alert('Erro' + error.code)
        }
      })
  };

  return (
    <div>
      {Logged ? <Redirect to="/jogos" /> :
        <header className="loginBlock">
          <div>

            <Row>

              <div data-aos='fade-right' className="col s12 m12 l5 loginRobotBlock">
                <Lottie className='control'
                  options={defaultOptions8}
                />
              </div>

              <div data-aos="fade-left" className="col s12 m12 l7">

                <div className="errorBlock">
                  {errors.name || errors.email ? (
                    <Alert variant="filled" severity="warning">
                      Por favor, preencha todos os campos!
                    </Alert>
                  ) : ''}

                  {wrongPassword || UserNotFound ? (
                    <Alert variant="filled" severity="error">
                      E-mail ou senha incorreta!
                    </Alert>
                  ) : ''}

                </div>




                <form onSubmit={handleSubmit(onSubmit)}>
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
                    ref={register()}
                  />

                  <Button node="button" type="submit" waves="light">
                    Entrar
                 <Icon right>
                      send
                 </Icon>
                  </Button>
                </form>

                <div className="withoutRegOurLog">
                  <Link to='/registrar'>
                    <p>
                      Ainda não estou registrado
                 <Icon> navigate_next</Icon>
                    </p>
                  </Link>
                </div>

              </div>

            </Row>
          </div>
        </header>
      }

    </div>
  )
}


export default Login;
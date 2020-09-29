import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';
import 'materialize-css';
import { TextInput, Icon, Button } from 'react-materialize';
import { useForm } from "react-hook-form";
import api from "../../Services/api";
import Alert from '@material-ui/lab/Alert';



function SendEmail() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    let { name, email, message } = data;

    const dataToSubmit = {
      name,
      email,
      message
    }

    api.post("/api/sendMail", dataToSubmit);
    e.target.reset();
  };


  return (
    <div className="container emailForm">
      <div className="errorBlock container">
        {errors.name ||
          errors.email ||
          errors.message
          ? (
            <Alert variant="filled" severity="warning">
              Por favor, preencha todos os campos!
            </Alert>
          ) : ''}
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

        <TextInput
          data-length={500}
          icon={<Icon>question_answer</Icon>}
          id="message"
          name="message"
          label="Mensagem"
          validate
          ref={register({ required: true })}
        />

        <Button node="button" type="submit" waves="light">
          Enviar
          <Icon right>
            send
          </Icon>
        </Button>
      </form>
    </div>
  );
}



export default SendEmail;
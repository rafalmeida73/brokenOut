import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';
import 'materialize-css';
import { TextInput, Icon, Button } from 'react-materialize';
import { useForm } from "react-hook-form";

function SendEmail() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="container emailForm">
      <form onSubmit={handleSubmit(onSubmit)}>

        <TextInput
          icon={<Icon>account_circle</Icon>}
          id="name"
          name="name"
          label="Nome"
          validate
          ref={register({ required: true })}
        />
        {errors.name && <p className="right-align">Este campo é obrigatório.</p>}

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
        {errors.email && <p className="right-align">Por favor, forneça um endereço de email válido.</p>}

        <TextInput
          data-length={500}
          icon={<Icon>question_answer</Icon>}
          id="message"
          name="message"
          label="Mensagem"
          validate
          ref={register({ required: true })}
        />
        {errors.message && <p className="right-align">Este campo é obrigatório.</p>}

        <div class="file-field input-field">
          <div class="btn black grey-text">
            <span>Anexo</span>
            <input type="file" accept="application/pdf" />
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" />
          </div>
        </div>

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
import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';
import 'materialize-css';
import { TextInput, Icon, Button } from 'react-materialize';

function SendEmail() {

 const [campos, setCampos] = useState({
  name: '',
  email: '',
  message: '',
  attachment: ''
 });

 function handleInputChange(event) {
  if (event.target.name === "attachment")
   campos[event.target.name] = event.target.files[0];
  else
   campos[event.target.name] = event.target.value;
  setCampos(campos);
 }

 function handleFormSubmit(event) {
  event.preventDefault();
  console.log(campos);
 }

 return (
  <div className="container">
   <form onSubmit={handleFormSubmit}>

    <TextInput
     icon={<Icon>account_circle</Icon>}
     id="name"
     name="name"
     label="Nome"
     validate
     onChange={handleInputChange}
    />

    <TextInput
     icon={<Icon>email</Icon>}
     email
     error="Por favor, forneça um endereço de email válido."
     id="email"
     name="email"
     label="Email"
     validate
     onChange={handleInputChange}
    />

    <TextInput
     data-length={500}
     icon={<Icon>question_answer</Icon>}
     id="message"
     name="message"
     label="Mensagem"
     validate
     onChange={handleInputChange}
    />

    <TextInput
     id="TextInput-4"
     id="attachment"
     name="attachment"
     label="File"
     type="file"
     onChange={handleInputChange}
    />


    <Button
     node="button"
     type="submit"
     waves="light"
    >
     Submit
  <Icon right>
      send
  </Icon>
    </Button>
   </form>
  </div>
 );
}



export default SendEmail;
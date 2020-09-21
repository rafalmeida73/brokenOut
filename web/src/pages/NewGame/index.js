import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import './styles.css';
import { TextInput, Icon, Button, Select } from 'react-materialize';
import { useForm, Controller } from "react-hook-form";
import Alert from '@material-ui/lab/Alert';
import AOS from 'aos';
import 'aos/dist/aos.css';


function NewGame() {

  useEffect(()=>{
    AOS.init({
       duration: 3000
    })
 }, []);

 const { register, handleSubmit, errors, control } = useForm();

 const onSubmit = (data, e) => {
  console.log(data);
  e.target.reset();
 };

 return (
  <div>
   <div className="newGameBlock">
    <header data-aos='fade-right' className="col s12 m12 l12  container">

     <div className="errorBlock">
      {errors.name ||
       errors.category ||
       errors.desc ||
       errors.image
       ? (
        <Alert variant="filled" severity="warning">
         Por favor, preencha todos os campos com *
        </Alert>
       ) : ''}

     </div>

     <form onSubmit={handleSubmit(onSubmit)}>


      <Controller
       as={<TextInput
        id="GameFile"
        name="GameFile"
        type="file"
        accept="image/png, image/jpeg"
       />}
       label="Imagem"
       control={control}
       placeholder="Imagem"
       name="image"
       type="file"
       ref={register({ required: true })}
       required
      />

      <TextInput
       icon={<Icon>account_circle</Icon>}
       id="name"
       name="name"
       label="Nome do jogo *"
       validate
       ref={register({ required: true })}
      />


      <TextInput
       icon={<Icon>description</Icon>}
       id="desc"
       name="desc"
       label="Descrição *"
       validate
       ref={register({ required: true })}
      />

      <TextInput
       icon={<Icon>loyalty</Icon>}
       id="steam"
       name="steam"
       label="Id na Steam"
       type="number"
       validate
       ref={register}
      />

      <TextInput
       icon={<Icon>link</Icon>}
       id="epic"
       name="epic"
       label="Link do jogo na Epic games"
       validate
       ref={register}
      />

      <TextInput
       icon={<Icon>link</Icon>}
       id="nuuvem"
       name="nuuvem"
       label="Link do jogo na Nuuvem"
       validate
       ref={register}
      />


      <Controller
       as={
        <Select
         icon={<Icon>apps</Icon>}
         id="Select-9"
         multiple={false}
         options={{
          classes: '',
          dropdownOptions: {
           alignment: 'left',
           autoTrigger: true,
           closeOnClick: true,
           constrainWidth: true,
           coverTrigger: true,
           hover: false,
           inDuration: 150,
           onCloseEnd: null,
           onCloseStart: null,
           onOpenEnd: null,
           onOpenStart: null,
           outDuration: 250
          }
         }}
         value=""
        >
         <option
          disabled
          value=""
         >
          Escolha a categoria *
       </option>
         <option value="action">
          Acão
       </option>
         <option value="strategy">
          Estratégia
       </option>
         <option value="fight">
          Luta
       </option>
         <option value="running">
          Corrida
       </option>
         <option value="rpg">
          RPG
       </option>
         <option value="construction">
          Construção
       </option>
         <option value="vr">
          VR
       </option>
         <option value="music">
          Música
       </option>
         <option value="sports">
          Esportes
       </option>
        </Select>
       }
       name="category"
       rules={{ required: "this is required" }}
       control={control}
       defaultValue=""
      />

      <Button node="button" type="submit" waves="light">
       Adicionar
          <Icon right>
        add
          </Icon>
      </Button>
     </form>
    </header>
   </div>
  </div>
 )
}


export default NewGame;
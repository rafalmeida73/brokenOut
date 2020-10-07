import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import './styles.css';
import { TextInput, Icon, Button, Select } from 'react-materialize';
import { useForm, Controller } from "react-hook-form";
import Alert from '@material-ui/lab/Alert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import firebase from '../../fireConnection';
import { useParams, Redirect } from "react-router-dom";


function NewGame() {
 let id = useParams().id;
 const [gameNotFound, setgameNotFound] = useState(false);
 const [sucess, setSucess] = useState(false);
 const [imageType, setImageType] = useState(false);
 const [autor, setAutor] = useState(firebase.getCurrentUid());
 const [imgGame, setImgGame] = useState(null);
 const [appInfo, setAppInfo] = useState([]);


 useEffect(() => {
  AOS.init({
   duration: 3000
  });

  firebase.getGame(id, (info) => {
   if (info.val() === null) {
    setgameNotFound(true);
   } else {
    let { appStore, descricao, epic, imagem, microsoft, nome, playStore, steam, playstation, autor } = info.val();
    setAutor(autor);
    setImgGame(imagem);
    let data = [];
    data.push({
     name: nome,
     img: imagem,
     desc: descricao,
     steam,
     microsoft,
     playStore,
     appStore,
     epic,
     playstation,
    });

    setAppInfo(data);
   }
  });

 }, []);

 console.log(autor);



 const { register, handleSubmit, errors, control } = useForm();

 // Cadastro no jogo
 const onSubmit = async data => {
  let { name, desc, steam, microsoft, epic, play, app, category, playstation } = data;
  const currentUid = firebase.getCurrentUid();

  let info = {
   imagem: imgGame,
   nome: name,
   descricao: desc,
   steam,
   microsoft,
   epic,
   playStore: play,
   appStore: app,
   categoria: category,
   playstation,
   autor: currentUid
  };

  firebase.editGame(id, info);
  setSucess(true);
 };

 //Gerar Url da imagem
 const handleFile = async (e) => {

  if (e.target.files[0]) {

   const image = e.target.files[0];

   if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
    const currentUid = firebase.getCurrentUid();

    const uploadTaks = firebase.storage
     .ref(`images/${currentUid}/${image.name}`)
     .put(image);

    await uploadTaks.on('state_changed',
     (snapshot) => {
      //progress
      console.log("progress")
     },
     (error) => {
      //error
      console.log('Error imagem: ' + error);
     },
     () => {
      //sucessO!
      firebase.storage.ref(`images/${currentUid}`)
       .child(image.name).getDownloadURL()
       .then(url => {
        setImgGame(url);
       })
     })
   } else {
    setImageType(true);
    return null;
   }
  }
 };

 return (
  <div>
   {!gameNotFound && autor === firebase.getCurrentUid() ? (
    <div className="newGameBlock">
     <header data-aos='fade-right' className="col s12 m12 l12 ">

      <div className="errorBlock container">
       {
        errors.category
         ? (
          <Alert variant="filled" severity="warning">
           Por favor, preencha a categoria!
          </Alert>
         ) : ''}

       {sucess && (
        <Alert variant="filled" severity="success">
         Jogo editado com sucesso!
        </Alert>
       )}


       {imageType && (
        <Alert variant="filled" severity="error">
         Envie uma imagem do tipo PNG, JPEG ou JPG!
        </Alert>
       )}

      </div>
      {appInfo.map((app) => {
       return (
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
         <TextInput
          label="Imagem"
          placeholder="Imagem"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleFile}
         />

         <TextInput
          icon={<Icon>account_circle</Icon>}
          id="name"
          name="name"
          label="Nome do jogo"
          defaultValue={app.name}
          validate
          ref={register()}
         />

         <div class="input-field col s12">
          <i class="material-icons prefix">chat</i>
          <textarea ref={register()} name="desc" id="desc" class="materialize-textarea" value={app.desc}></textarea>
          <label for="desc">Descrição</label>
         </div>

         <TextInput
          icon={<Icon>loyalty</Icon>}
          id="steam"
          name="steam"
          label="Id na Steam"
          type="number"
          validate
          ref={register}
          defaultValue={app.steam}
         />

         <TextInput
          icon={<Icon>loyalty</Icon>}
          id="microsoft"
          name="microsoft"
          label="Link do jogo na Microsoft Store"
          validate
          ref={register}
          defaultValue={app.microsoft}
         />

         <TextInput
          icon={<Icon>loyalty</Icon>}
          id="playstation"
          name="playstation"
          label="Link do jogo na Playstation Store"
          validate
          ref={register}
          defaultValue={app.playstation}
         />

         <TextInput
          icon={<Icon>link</Icon>}
          id="epic"
          name="epic"
          label="Link do jogo na Epic games"
          validate
          ref={register}
          defaultValue={app.epic}
         />

         <TextInput
          icon={<Icon>link</Icon>}
          id="play"
          name="play"
          label="Link do jogo na Play Store"
          validate
          ref={register}
          defaultValue={app.playStore}
         />

         <TextInput
          icon={<Icon>link</Icon>}
          id="app"
          name="app"
          label="Link do jogo na App Store"
          validate
          ref={register}
          defaultValue={app.appStore}
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
          Editar
       <Icon right>
           add
       </Icon>
         </Button>
        </form>
       )
      })}

     </header>
    </div>
   )
    :
    <Redirect push to="/404/GameNotFound" />
   }
  </div>
 )
}


export default NewGame;
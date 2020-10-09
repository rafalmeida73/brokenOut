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

function NewGame() {
  const [sucess, setSucess] = useState(false);
  const [imageType, setImageType] = useState(false);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 3000
    });
  }, []);



  const { register, handleSubmit, errors, control } = useForm();

  // Cadastro no jogo
  const onSubmit = async data => {
    let { name, desc, steam, microsoft, epic, play, app, category, playstation } = data;
    const currentUid = firebase.getCurrentUid();

    let games = firebase.app.ref('games');
    let key = games.push().key;
    await games.child(key).set({
      imagem: url,
      nome: name,
      descricao: desc,
      steam: steam,
      microsoft: microsoft,
      epic: epic,
      playStore: play,
      appStore: app,
      categoria: category,
      playstation,
      autor: currentUid
    });

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
                setUrl(url);
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
      <div className="newGameBlock">
        <header data-aos='fade-right' className="col s12 m12 l12 ">

          <div className="errorBlock container">
            {errors.name ||
              errors.category ||
              errors.desc ||
              errors.image ||
              errors.note ||
              errors.buy
              ? (
                <Alert variant="filled" severity="warning">
                  Por favor, preencha todos os campos com *
                </Alert>
              ) : ''}

            {sucess && (
              <Alert variant="filled" severity="success">
                Jogo cadastrado com sucesso!
              </Alert>
            )}

            {imageType && (
              <Alert variant="filled" severity="error">
                Envie uma imagem do tipo PNG, JPEG ou JPG!
              </Alert>
            )}

          </div>

          <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Imagem"
              placeholder="Imagem"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              required
              onChange={handleFile}
            />

            <TextInput
              icon={<Icon>account_circle</Icon>}
              id="name"
              name="name"
              label="Nome do jogo *"
              validate
              ref={register({ required: true })}
            />

            <div class="input-field col s12">
              <i class="material-icons prefix">chat</i>
              <textarea ref={register({ required: true })} name="desc" id="desc" class="materialize-textarea"></textarea>
              <label for="desc">Descrição *</label>
            </div>

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
              id="microsoft"
              name="microsoft"
              label="Link do jogo na Microsoft Store"
              validate
              ref={register}
            />

            <TextInput
              icon={<Icon>link</Icon>}
              id="playstation"
              name="playstation"
              label="Link do jogo na Playstation Store"
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
              id="play"
              name="play"
              label="Link do jogo na Play Store"
              validate
              ref={register}
            />

            <TextInput
              icon={<Icon>link</Icon>}
              id="app"
              name="app"
              label="Link do jogo na App Store"
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
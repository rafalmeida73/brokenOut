import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Collapsible, CollapsibleItem, Icon, Button, Row, TextInput } from 'react-materialize';
import './styles.css';
import Color, { Palette } from "color-thief-react";
import ReactHtmlParser from 'react-html-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Alert from '@material-ui/lab/Alert';
import 'firebase/storage';

import Steam from '../../assets/img/steam.png';
import Epic from '../../assets/img/epic.png';
import Play from '../../assets/img/play.png';
import App from '../../assets/img/apple.png';
import Microsoft from '../../assets/img/microsoft.svg';
import Playstation from '../../assets/img/ps4.png';

import firebase from '../../fireConnection';
import Submit from '../../components/Submit';
import Store from '../../components/Store'
import Load from '../../components/Loading'
import styled from 'styled-components';

const Loading = () => <div style={{ height: "100vh" }}><Load /></div>;
export default function GameInfo() {
  let id = useParams().id;
  const [appID, setAppId] = useState(null);
  const [appInfo, setAppInfo] = useState([]);
  const [newsNotFound, setNewsNotFound] = useState(false);
  const [imgGame, setImgGame] = useState(null);
  const [news, setNews] = useState([]);
  const [comment, setComment] = useState([]);
  const [name, setName] = useState(localStorage.nome);
  const [pColor, setpColor] = useState(null);
  const [color, setColor] = useState(null);
  const [url, setUrl] = useState("https://i.imgur.com/DzapWf3b.jpg");


  useEffect(() => {
    AOS.init({
      duration: 3000
    });

    firebase.getUserName((info) => {
      localStorage.nome = info.val().nome;
      setName(localStorage.nome)
    })

    firebase.getGame(id, (info) => {
      let { appStore, descricao, epic, imagem, microsoft, nome, playStore, steam, playstation } = info.val();
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
      setImgGame(imagem);
      setAppId(steam);
      setAppInfo(data);
      setUrl("https://cors-anywhere.herokuapp.com/" + imagem)

      if (steam === "") {
        setNewsNotFound(true);
      } else {
        // News API
        api.get("/steam/game/" + steam + "/news")
          .then(res => {
            setNews(res.data.appnews.newsitems);
          });
      };

    });

    //comentarios
    firebase.app.ref('comentarios').child(id).on('value', (snapshot) => {
      let comments = [];
      snapshot.forEach((childItem) => {

        comments.push({
          key: childItem.key,
          comment: childItem.val().comentario,
          date: childItem.val().data,
          name: childItem.val().nome,
          note: childItem.val().nota,
        })
      });

      setComment(comments);
    })
  }, []);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    let { name, comment, note, date } = data;
    const currentUid = firebase.getCurrentUid();

    let comments = firebase.app.ref('comentarios');
    let key = comments.push().key;
    let idKey = id;
    await comments.child(idKey).child(key).set({
      nome: name,
      comentario: comment,
      nota: note,
      data: date,
      autor: currentUid
    });
  };


  let date = new Date();
  let img = `https://cors-anywhere.herokuapp.com/${imgGame}`;

  const CommentsStyle = styled.form`

  input:not(.browser-default):focus:not([readonly]) {
  border-bottom: 1px solid ${color};
  box-shadow: 0 1px 0 0  ${color};
  };

  i{
    color: ${color};
  };

  label {
  color: ${color};
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1rem;
  cursor: text;
  transition: transform 0.2s ease-out, color 0.2s ease-out;
  transform-origin: 0% 100%;
  text-align: initial;
  transform: translateY(12px);
}

button i{
    color: ${pColor};
  };

`;


  return (
    <div className="App">
      <Palette src={url} crossOrigin="anonymous" format="hex" colorCount={4}>
        {({ data, loading }) => {
          if (loading) return "";
          return <div>{data.map((color, index) => setColor(color))}</div>;
        }}
      </Palette>
      <Color src={img} crossOrigin="null" format="hex">
        {({ data, loading }) => {
          if (loading) return <Loading />;
          setpColor(data);
          return (
            <div key={"notKey"} data-aos='fade-right' style={{ backgroundColor: data }} className='container gameInfoBlock'>
              {appInfo.map(info => {
                return (
                  <>
                    <div className="col s12 m12 l12 descriptionGameBlock" key={id}>
                      <img src={imgGame} alt={info.name} className="responsive-img" />
                      <h1 style={{ color: color }}>{info.name}</h1>
                      <p style={{ color: color }}>
                        {info.desc}
                      </p>
                    </div>


                    {/* Links */}
                    <div data-aos='fade-right' className="linksBlock container">
                      {info.steam !== "" && (
                        <a href={`https://store.steampowered.com/app/${info.steam}`} target="_blank" rel="noopener noreferrer" >
                          <img src={Steam} alt="Comprar na Steam" width="50" />
                        </a>
                      )}

                      {info.microsoft !== "" && (
                        <a href={info.microsoft} target="_blank" rel="noopener noreferrer">
                          <img src={Microsoft} alt="Comprar na Microsoft Store" width="50" />
                        </a>
                      )}

                      {info.epic !== "" && (
                        <a href={info.epic} target="_blank" rel="noopener noreferrer">
                          <img src={Epic} alt="Comprar na Steam Games" width="50" />
                        </a>
                      )}
                      {info.playStore !== "" && (
                        <a href={info.playStore} target="_blank" rel="noopener noreferrer">
                          <img src={Play} alt="Comprar na Play Store" width="50" />
                        </a>
                      )}

                      {info.appStore !== "" && (
                        <a href={info.appStore} target="_blank" rel="noopener noreferrer">
                          <img src={App} alt="Comprar na App Store" width="50" />
                        </a>
                      )}

                      {info.playstation !== "" && (
                        <a href={info.playstation} target="_blank" rel="noopener noreferrer">
                          <img src={Playstation} alt="Comprar na Playstation Store" width="50" />
                        </a>
                      )}

                    </div>
                  </>
                )
              })}

              {/* News */}
              {newsNotFound ? "" :
                <>
                  <div data-aos='fade-right' className="col s12 m12 l12 news container">
                    <h3 style={{ color: color }} className="left-align">
                      Notícias
                  </h3>

                    <div>
                      <Collapsible accordion popout>
                        {news.map((n) => {
                          return (
                            <CollapsibleItem
                              expanded={false}
                              header={n.title}
                              icon={<Icon >dvr</Icon>}
                              node="div"
                              key={n.gid}
                            >
                              <p>
                                {ReactHtmlParser(n.contents)}
                              </p>

                              <Button
                                href={n.url}
                                node="a"
                                waves="light"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: color }}
                              >
                                Ver a matéria completa
                          </Button>
                            </CollapsibleItem>
                          )
                        })}
                      </Collapsible>
                    </div>
                  </div>



                  {/* iframe */}
                  <div data-aos='fade-right' className='iframeGame'>
                    <iframe title="Concurrent players" src={"https://steamdb.info/embed/?appid=" + appID} height="389"
                      style={{ border: 0, overflow: "hidden" }}></iframe>
                  </div>

                </>
              }

              {/* Comments  */}
              <div data-aos='fade-right' className="commentsBlock">
                {comment.length === 0 ?
                  <h4 style={{ color: color }}>
                    Adicione um comentário
                  </h4> :
                  <h4 style={{ color: color }}>
                    Comentários
                  </h4>
                }
                <div className="comments white">
                  {comment.map((c) => {
                    return (
                      <div key={c.key} className="left-align">
                        <Row>
                          <div className="col s10 m6 l6">
                            <h3>{c.name}</h3>
                            <span>{c.date}</span>
                          </div>
                          <div className="col s2 m6 l6 note">
                            {c.note === "1" ? <Icon className="bad">looks_one</Icon> :
                              c.note === "2" ? <Icon className="reasonable">looks_two</Icon> :
                                c.note === "3" ? <Icon className="reasonable">looks_3</Icon> :
                                  c.note === "4" ? <Icon className="reasonable">looks_4</Icon> :
                                    c.note === "5" ? <Icon className="good">looks_5</Icon> : ""
                            }
                          </div>
                        </Row>

                        <p>
                          {c.comment}
                        </p>
                        <hr style={{ backgroundColor: data }} />
                      </div>
                    )
                  })}
                </div>

                <div className="commentsForm">
                  <div className="errorBlock">
                    {errors.name || errors.comment || errors.note ? (
                      <Alert variant="filled" severity="warning">
                        Por favor, preencha todos os campos!
                      </Alert>
                    ) : ''}
                  </div>
                  <CommentsStyle color>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <TextInput
                        id="name"
                        name="name"
                        type="hidden"
                        validate
                        value={name}
                        ref={register()}
                      />
                      <TextInput
                        icon={<Icon style={{ backgroundColor: "#000" }}>chat</Icon>}
                        id="comment"
                        name="comment"
                        label="Comentário"
                        type="text"
                        validate
                        ref={register({ minLength: 2, required: true })}
                      />
                      <TextInput
                        icon={<Icon>grade</Icon>}
                        id="note"
                        name="note"
                        label="Nota"
                        type="number"
                        min="1"
                        max="5"
                        validate
                        ref={register({ maxLength: 1, required: true })}
                      />
                      <TextInput
                        id="date"
                        name="date"
                        type="hidden"
                        validate
                        value={date.toLocaleDateString()}
                        ref={register()}
                      />
                      <Store>
                        <Submit color={color} pcolor={pColor} />
                      </Store>

                    </form>
                  </CommentsStyle>
                </div>
              </div>

            </div>
          );
        }}
      </Color>
    </div>
  );
}

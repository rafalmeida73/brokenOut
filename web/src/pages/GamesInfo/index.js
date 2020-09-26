import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Collapsible, CollapsibleItem, Icon, Button, Row, TextInput } from 'react-materialize';
import './styles.css';
import Color from "color-thief-react";
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

import firebase from '../../fireConnection';
import Submit from '../../components/Submit';
import Store from '../../components/Store'




function GamesInfo() {
  let id = useParams().id;
  const [appID, setAppId] = useState(null);
  const [appInfo, setAppInfo] = useState([]);
  const [newsNotFound, setNewsNotFound] = useState(false);
  const [imgGame, setImgGame] = useState(null);
  const [news, setNews] = useState([]);
  const [comment, setComment] = useState([]);
  const [name, setName] = useState(localStorage.nome);

  useEffect(() => {
    // News API
    AOS.init({
      duration: 3000
    });

    firebase.getUserName((info) => {
      localStorage.nome = info.val().nome;
      setName(localStorage.nome)
    })

    firebase.getGame(id, (info) => {
      let { appStore, descricao, epic, imagem, microsoft, nome, playStore, steam } = info.val();
      let data = [];
      data.push({
        name: nome,
        img: imagem,
        desc: descricao,
        steam,
        microsoft,
        playStore,
        appStore,
        epic
      });
      setImgGame(imagem);
      setAppId(steam);
      setAppInfo(data);

      if (steam === "undefined") {
        setNewsNotFound(true);
      } else {
        api.get("/steam/game/" + steam + "/news")
          .then(res => {
            setNews(res.data.appnews.newsitems);
          });
      };

    })
  }, []);


  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    setComment([...comment, data])
  };

  let date = new Date();
  let img = `https://cors-anywhere.herokuapp.com/${imgGame}`;

  return (
    <div className="App">
      <Color src={img} crossOrigin="null" format="hex">
        {({ data, loading }) => {
          return (
            <div key={"1"} data-aos='fade-right' style={{ backgroundColor: data }} className='container gameInfoBlock'>
              {appInfo.map(info => {
                return (
                  <>
                    <div className="col s12 m12 l12 descriptionGameBlock" key={id}>
                      <img src={imgGame} alt="" />
                      <h1 className="white-text">{info.name}</h1>
                      <p>
                        {info.desc}
                      </p>
                    </div>


                    {/* Links */}
                    <div data-aos='fade-right' className="linksBlock container">
                      {info.steam !== "undefined" && (
                        <a href={`https://store.steampowered.com/app/${info.steam}`} >
                          <img src={Steam} alt="Comprar na Steam" width="50" />
                        </a>
                      )}

                      {info.microsoft !== "undefined" && (
                        <a href={info.microsoft}>
                          <img src={Microsoft} alt="Comprar na Microsoft Store" width="50" />
                        </a>
                      )}

                      {info.epic !== "undefined" && (
                        <a href={info.epic}>
                          <img src={Epic} alt="Comprar na Steam Games" width="50" />
                        </a>
                      )}
                      {info.playStore !== "undefined" && (
                        <a href={info.playStore}>
                          <img src={Play} alt="Comprar na Play Store" width="50" />
                        </a>
                      )}

                      {info.appStore !== "undefined" && (
                        <a href={info.appStore}>
                          <img src={App} alt="Comprar na App Store" width="50" />
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
                    <h3 className="left-align white-text">
                      Notícias
                  </h3>

                    <div>
                      <Collapsible accordion popout>
                        {news.map((n) => {
                          return (
                            <CollapsibleItem
                              expanded={false}
                              header={n.title}
                              icon={<Icon>dvr</Icon>}
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
                  <h4 className='white-text'>
                    Adicione um comentário
                  </h4> :
                  <h4 className='white-text'>
                    Comentários
                  </h4>
                }
                <div className="comments white">
                  {comment.map((c) => {
                    return (
                      <div key={c.id} className="left-align">
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
                      icon={<Icon>chat</Icon>}
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
                    <TextInput
                      id="id"
                      name="id"
                      type="hidden"
                      validate
                      value={Math.random()}
                      ref={register()}
                    />

                    <Store>
                      <Submit />
                    </Store>
                  </form>
                </div>
              </div>

            </div>
          );
        }}
      </Color>
    </div>
  )
}


export default GamesInfo;
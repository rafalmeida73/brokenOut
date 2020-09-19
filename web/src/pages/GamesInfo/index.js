import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Collapsible, CollapsibleItem, Icon, Button, Row, TextInput } from 'react-materialize';
import './styles.css';
import Color from 'color-thief-react';
import ReactHtmlParser from 'react-html-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from "../../Services/api";
import { useParams, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import Alert from '@material-ui/lab/Alert';


function GamesInfo() {
  const [appID] = useState(useParams().id);
  const [newsNotFound, setNewsNotFound] = useState(false);
  const [news, setNews] = useState([]);
  const [comment, setComment] = useState([]);


  //News API
  useEffect(() => {
    let newsUrl = "/steam/game/" + appID + "/news";
    api.get(newsUrl)
      .then(res => {
        setNews(res.data.appnews.newsitems)
      })
      .catch(error => {
        setNewsNotFound(true)
      });

    AOS.init({
      duration: 3000
    });

    console.log(comment.length)
  }, []);


  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
    setComment([...comment, data])
  };

  const imgSrc = "https://cdn.cloudflare.steamstatic.com/steam/apps/" + appID + "/header.jpg?t=1599726221";
  let date = new Date();

  return (
    <div className="App">
      <Color src={imgSrc} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          return (
            <div data-aos='fade-right'  style={{ backgroundColor: data }} className='container gameInfoBlock'>
              <div className="col s12 m12 l12 descriptionGameBlock">
                <img src={imgSrc} alt="" />
                <h1 className="white-text"> Lorem ipsum dolor</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit enim imperdiet blandit ultrices fermentum gravida pellentesque. Amet scelerisque mi id enim etiam adipiscing velit proin aliquet. Amet condimentum nibh amet semper ut integer sed facilisis. Lacus lorem nisl, tellus, dui convallis. In sit ut elementum at. Amet, orci nibh dignissim eget semper ac ullamcorper elit.
                </p>
              </div>

              {/* News */}
              {newsNotFound ? "" :
                <div data-aos='fade-right'  className="col s12 m12 l12 news container">
                  <h3 className='left-align white-text'>
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
              }


              {/* iframe */}

              <div data-aos='fade-right'  className='iframeGame'>
                <iframe title="Concurrent players" src={"https://steamdb.info/embed/?appid=" + appID} height="389"
                  style={{ border: 0, overflow: "hidden" }}></iframe>
              </div>

              {/* Comments  */}
              <div data-aos='fade-right'  className="commentsBlock">
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
                                  c.note === "4" ? <Icon className="good">looks_4</Icon> :
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
                      icon={<Icon>face</Icon>}
                      id="name"
                      name="name"
                      label="Nome"
                      type="text"
                      validate
                      ref={register({ minLength: 4, required: true })}
                    />
                    <TextInput
                      icon={<Icon>chat</Icon>}
                      id="comment"
                      name="comment"
                      label="Comentário"
                      type="text"
                      validate
                      ref={register({ minLength: 5, required: true })}
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
                    <Button node="button" type="submit" waves="light">
                      Comentar
                  <Icon right>
                        send
                  </Icon>
                    </Button>
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
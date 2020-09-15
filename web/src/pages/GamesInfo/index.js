import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Collapsible, CollapsibleItem, Icon, Button } from 'react-materialize';
import './styles.css';
import Color from 'color-thief-react';
import ReactHtmlParser from 'react-html-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from "../../Services/api";
import { useParams, Redirect } from "react-router-dom";

function GamesInfo() {
  const [appID] = useState(useParams().id);
  const [notFound, setNotFound] = useState(false);
  const [news, setNews] = useState([]);


  //News API
  useEffect(() => {
    let newsUrl = "/steam/game/" + appID + "/news";
    api.get(newsUrl)
      .then(res => {
        setNews(res.data.appnews.newsitems)
      })
      .catch(error => {
        setNotFound(true)
      });

    AOS.init({
      duration: 3000
    });
  }, []);

  const imgSrc = "https://cdn.cloudflare.steamstatic.com/steam/apps/" + appID + "/header.jpg?t=1599726221";


  return (
    <div className="App">
      {notFound ? <Redirect to="/404" /> :
        <Color src={imgSrc} crossOrigin="anonymous" format="hex">
          {({ data, loading }) => {
            return (
              <div data-aos='fade-right' style={{ backgroundColor: data }} className='container gameInfoBlock'>
                <div className="col s12 m12 l12 descriptionGameBlock">
                  <img src={imgSrc} alt="" />
                  <h1 className="white-text"> Lorem ipsum dolor</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit enim imperdiet blandit ultrices fermentum gravida pellentesque. Amet scelerisque mi id enim etiam adipiscing velit proin aliquet. Amet condimentum nibh amet semper ut integer sed facilisis. Lacus lorem nisl, tellus, dui convallis. In sit ut elementum at. Amet, orci nibh dignissim eget semper ac ullamcorper elit.
                </p>
                </div>

                {/* News */}

                <div data-aos='fade-right' className="col s12 m12 l12 news container">
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
                            icon={<Icon>fiber_new</Icon>}
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


              </div>
            );
          }}
        </Color>}

    </div>
  )
}


export default GamesInfo;
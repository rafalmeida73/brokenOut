import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row, TextInput, Icon, Button, Dropdown, Divider, Tabs, Tab } from 'react-materialize';
import './styles.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm } from "react-hook-form";
import firebase from '../../fireConnection';
import Pagination from '../../components/Pagination';


function Games() {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    AOS.init({
      duration: 3000
    })

    firebase.app.ref('games').on('value', (snapshot) => {
      let info = [];
      snapshot.forEach((childItem) => {

        info.push({
          key: childItem.key,
          category: childItem.val().categoria,
          img: childItem.val().imagem,
          name: childItem.val().nome,
        })
      });

      setGames(info);
    })
  }, []);


  //all games
  function allGames() {
    firebase.app.ref('games').on('value', (snapshot) => {
      let info = [];
      snapshot.forEach((childItem) => {

        info.push({
          key: childItem.key,
          category: childItem.val().categoria,
          img: childItem.val().imagem,
          name: childItem.val().nome,
        })
      });

      setGames(info);
    })
  }

  //filter by category
  function filterItems(category) {
    firebase.app.ref('games').on('value', (snapshot) => {
      let info = [];
      snapshot.forEach((childItem) => {

        info.push({
          key: childItem.key,
          category: childItem.val().categoria,
          img: childItem.val().imagem,
          name: childItem.val().nome,
        })
      });

      let searchCategory = info.filter((g) => {
        return g.category.toLowerCase().indexOf(category.toLowerCase()) > -1;
      })

      setGames(searchCategory);
    })
  }

  //search game
  const onSubmit = async (data, e) => {
    let { game } = data;

    await firebase.app.ref('games').on('value', (snapshot) => {
      let info = [];
      snapshot.forEach((childItem) => {

        info.push({
          key: childItem.key,
          category: childItem.val().categoria,
          img: childItem.val().imagem,
          name: childItem.val().nome,
        })
      });

      let searchGame = info.filter((g) => {
        return g.name.toLowerCase().indexOf(game.toLowerCase()) > -1;
      })

      setGames(searchGame);
    })

    e.target.reset()
  }

  //Get games
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = games.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Row data-aos='fade-right' className=" titleBlock">

        <div className="col s12 m7 l8">
          <h1 className="white-text">Jogos cadastrados</h1>
        </div>

        <div className="col s12 m4 l4">
          <Link to="/novoGame">
            <Button
              node="a"
              waves="light"
            >
              Adicionar jogo
          <Icon right>
                add
          </Icon>
            </Button>
          </Link>
        </div>
      </Row>

      {/* TABELA DE FILTROS */}

      <div data-aos='fade-right' className="col s12 m12 l12 container tabsFilters">
        <Tabs  className="tab-demo z-depth-1 tabs-fixed-width">
          <Tab
            active
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="#" onClick={() => allGames()}>Todos os jogos</Link>}
          >
          </Tab>
          <Tab
            active
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="#" onClick={() => filterItems("action")}>Ação</Link>}
          >
          </Tab>
          <Tab
            disabled
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="#" onClick={() => filterItems("strategy")}>Estratégia</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="#" onClick={() => filterItems("fight")}>Luta</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="#" onClick={() => filterItems("running")}>Corrida</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="#" onClick={() => filterItems("rpg")}>RPG</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="#" onClick={() => filterItems("construction")}>Construção</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="#" onClick={() => filterItems("vr")}>VR</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="#" onClick={() => filterItems("music")}>Música</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="#" onClick={() => filterItems("sports")}>Esportes</Link>}
          >
          </Tab>
        </Tabs>
      </div>

      {/* FORM PESQUISAR JOGO */}

      <Row data-aos='fade-right' className="center-align filtersBlock">
        <div className="col s12 m12 l10 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              icon={<Icon>search</Icon>}
              id="TextInput-4"
              label="Procurar Jogo"
              name="game"
              ref={register({ required: true })}
            />
          </form>
        </div>


        {/* DROPDOWN DE FILTROS */}

        <div data-aos='fade-right' className="col s4 m4 l2">
          <Dropdown
            id="Dropdown_6"
            options={{
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }}
            trigger={<Button node="button">Filtrar</Button>}
          >
            <Link to="#" className="all" onClick={() => allGames()}>
              Todos os jogos
            </Link>
            <Link to="#" className="action" onClick={() => filterItems("action")}>
              Ação/ Aventura
            </Link>

            <Divider />

            <Link to="#" className="strategy" onClick={() => filterItems("strategy")}>
              Estratégia
            </Link>

            <Divider />
            <Link to="#" className="fight" onClick={() => filterItems("fight")}>
              Luta
            </Link>

            <Divider />
            <Link to="#" className="running" onClick={() => filterItems("running")}>
              Corrida
            </Link>

            <Divider />
            <Link to="#" className="rpg" onClick={() => filterItems("rpg")}>
              RPG
            </Link>

            <Divider />
            <Link to="#" className="construction" onClick={() => filterItems("construction")}>
              Construção
            </Link>

            <Divider />
            <Link to="#" className="vr" onClick={() => filterItems("vr")}>
              VR
            </Link>

            <Divider />
            <Link to="#" className="music" onClick={() => filterItems("music")}>
              Música
            </Link>

            <Divider />
            <Link to="#" className="sports" onClick={() => filterItems("sports")}>
              Esportes
            </Link>


          </Dropdown>
        </div>
      </Row>

      <Row className='container catalog'>
        <div>
          {currentPost.map(game => {
            return (
              <div key={game.key}>
                <Link to={`/jogos/${game.key}`}>
                  <div data-aos='fade-down' data-aos-duration="1900" className={"col s12 m6 l4 iconsNote"}>

                    <div className={`cardGame ${game.category === "action" ? "action" :
                      game.category === "strategy" ? "strategy" :
                        game.category === "fight" ? "fight" :
                          game.category === "running" ? "running" :
                            game.category === "rpg" ? "rpg" :
                              game.category === "construction" ? "construction" :
                                game.category === "music" ? "music" :
                                  game.category === "sports" ? "sports" :
                                    game.category === "vr" ? "vr" :
                                      ""
                      }`}>

                      <img className="responsive-img" src={game.img} alt={game.name}/>
                      <h4 className="center-align">{game.name}</h4>

                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </Row>
      <Pagination postsPerPage={postsPerPage} totalPosts={games.length} paginate={paginate} />
    </div>
  )
}


export default Games;
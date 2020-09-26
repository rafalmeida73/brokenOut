import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Row, TextInput, Icon, Button, Dropdown, Divider, Tabs, Tab } from 'react-materialize';
import './styles.css';
import GamesCard from '../../components/GamesCard';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Games() {

  useEffect(() => {
    AOS.init({
      duration: 3000
    })
  }, []);

  return (
    <div style={{minHeight: "100vh"}}>
      <Row data-aos='fade-right'  className=" titleBlock">

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

      <div data-aos='fade-right'  className="col s12 m12 l12 container tabsFilters">
        <Tabs className="tab-demo z-depth-1 tabs-fixed-width">
          <Tab
            active
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="/jogos">Ação</Link>}
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
            title={<Link to="/jogos">Estratégia</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="/jogos">Luta</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="/jogos">Corrida</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="/jogos">RPG</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="/jogos">Construção</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="/jogos">VR</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="/jogos">Música</Link>}
          >
          </Tab>
          <Tab
            options={{
              duration: 300,
              onShow: null,
              responsiveThreshold: Infinity,
              swipeable: false
            }}
            title={<Link to="/jogos">Esportes</Link>}
          >
          </Tab>
        </Tabs>
      </div>

      {/* FORM PESQUISAR JOGO */}

      <Row data-aos='fade-right'  className="center-align filtersBlock">
        <div className="col s12 m12 l10 ">
          <form action="">
            <TextInput
              icon={<Icon>search</Icon>}
              id="TextInput-4"
              label="Procurar Jogo"
            />
          </form>
        </div>


        {/* DROPDOWN DE FILTROS */}

        <div className="col s4 m4 l2">
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
            <Link className="action" to="#">
              Ação/ Aventura
            </Link>

            <Divider />

            <Link className="strategy" to="#">
              Estratégia
            </Link>

            <Divider />
            <Link className="fight" to="#">
              Luta
            </Link>

            <Divider />
            <Link className="running" to="#">
              Corrida
            </Link>

            <Divider />
            <Link className="rpg" to="#">
              RPG
            </Link>

            <Divider />
            <Link className="construction" to="#">
              Construção
            </Link>

            <Divider />
            <Link className="real_life" to="#">
              VR
            </Link>

            <Divider />
            <Link className="music" to="#">
              Música
            </Link>

            <Divider />
            <Link className="sports" to="#">
              Esportes
            </Link>


          </Dropdown>
        </div>
      </Row>

      <Row data-aos='fade-right'  className='container catalog'>
        <GamesCard />
      </Row>
    </div>
  )
}


export default Games;
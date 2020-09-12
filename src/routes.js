import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer';
import About from './pages/About';
import Games from './pages/Games';
import GamesInfo from './pages/GamesInfo';
import Error from './pages/Error';
import SingUp from './pages/SingUp';

const Routes = ()=>{
 return(
  <BrowserRouter>
   <Header/>
  <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/sobre" component={About}/>
   <Route exact path="/jogos" component={Games}/>
   <Route exact path="/jogos/123" component={GamesInfo}/>
   <Route exact path="/registrar" component={SingUp}/>
   <Route path="*" component={Error}/>
  </Switch>
  <Footer/>
  </BrowserRouter>
 );
}

export default Routes;
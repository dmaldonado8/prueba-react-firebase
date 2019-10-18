import React from 'react';
import './styles/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Importación de componentes screen
import {LoginPage} from './pages/LoginPage';
import MainPage from './pages/MainPage';
import {withAuthentication, privateRoute, publicRoute} from './helpers/Session';

const App = (props) => (
  <Router>
    <Switch>
      <Route path='/' exact component={publicRoute(LoginPage, props.authUser)}></Route>
      <Route path='/main' component={privateRoute(MainPage, props.authUser)}></Route>
    </Switch>
  </Router>
)

export default withAuthentication(App);

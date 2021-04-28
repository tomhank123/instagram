import React from 'react';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN}>LOGIN Page</Route>
        <Route path={ROUTES.SIGN_UP}>SIGN_UP Page</Route>
        <Route path={ROUTES.PROFILE}>PROFILE Page</Route>
        <Route path={ROUTES.DASHBOARD} exact>DASHBOARD Page</Route>
        <Route>Notfound Page</Route>
      </Switch>
    </Router>
  );
}

export default App;

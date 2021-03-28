import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components

//Pages
import Home from './Pages/Home/Home';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;

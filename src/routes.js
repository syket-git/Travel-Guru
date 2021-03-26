import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Home from './Pages/Home/Home';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Router exact path="/">
            <Home />
          </Router>
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;

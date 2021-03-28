import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Home from './Pages/Home/Home';
import Book from './Pages/Book/Book';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/book/:slug">
            <Book />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;

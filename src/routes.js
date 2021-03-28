import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Home from './Pages/Home/Home';
import Book from './Pages/Book/Book';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Home from './Pages/Home/Home';
import Book from './Pages/Book/Book';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Search from './Pages/Search/Search';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/book/:slug">
            <Book />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;

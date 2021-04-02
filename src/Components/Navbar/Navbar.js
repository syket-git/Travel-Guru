import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import './Navbar.css';
import { useHistory } from 'react-router-dom';

const Navigation = ({ color }) => {
  const auth_user = localStorage.getItem('auth_user');
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('auth_user');
    history.push('/login');
  };
  return (
    <div className="mt-3">
      <Navbar
        expand="lg"
        className={`${
          color === 'white' ? 'white__navigation' : 'black__navigation'
        } `}
      >
        <Navbar.Brand href="/">Travel Guru</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="navbar__form" inline>
            <FormControl
              type="text"
              placeholder="Search your destination"
              className="ml-sm-5 navbar__search"
            />
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="/">News</Nav.Link>
            <Nav.Link href="/">Destination</Nav.Link>
            <Nav.Link href="/">Blog</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
            {auth_user !== null ? (
              <span
                onClick={handleLogout}
                style={{ color: 'black', cursor: 'pointer' }}
                className="navbar__login"
              >
                Logout
              </span>
            ) : (
              <a
                style={{ color: 'black' }}
                className="navbar__login"
                href="/login"
              >
                Login
              </a>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;

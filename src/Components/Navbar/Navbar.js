import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import './Navbar.css';

const Navigation = ({ color }) => {
  const auth_user = localStorage.getItem('auth_user');
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
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/destination">Destination</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {auth_user !== null ? (
              <span
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

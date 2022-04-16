import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar sticky="top" className="my-nav" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            Travel World
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <Link to={"/home"} className="item">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#about">
                <Link to={"/about"} className="item">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="#login">
                <Link to={"/login"} className="item">
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

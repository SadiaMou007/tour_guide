import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar sticky="top" className="my-nav" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="text-light">
          Travel World
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <NavLink
                to={"/home"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                HOME
              </NavLink>
            </Nav.Link>

            <Nav.Link href="#">
              <NavLink
                to={"/services"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                SERVICES
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#">
              <NavLink
                to={"/reviews"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                REVIEWS
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#blogs">
              <NavLink
                to={"/blogs"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                BLOGS
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                ABOUT
              </NavLink>
            </Nav.Link>

            <Nav.Link href="#">
              {user ? (
                <button
                  className="border-0 p-1 rounded me-2"
                  onClick={handleSignOut}
                >
                  LOGOUT
                </button>
              ) : (
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  LOGIN
                </NavLink>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

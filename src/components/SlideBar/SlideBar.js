import React, { useState } from "react";
import "./SlideBar.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  Container,
} from "reactstrap";

import Typed from "react-typed";

function SlideBar() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <Navbar dark className="pp-navbar pp-box-shadow-purple" expand="sm">
      <Container>
        <NavbarBrand href="/" className="mr-auto">
          {
            <Typed
              className="typed-text"
              strings={["Intro.."]}
              typeSpeed={150}
              backSpeed={50}
              fadeOut={false}
              loop={true}
            />
          }
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink className="btn btn-about" href="#about">
              Summary
            </NavLink>
            <NavLink className="btn btn-experience" href="#experience">
              Experience
            </NavLink>
            <NavLink className="btn btn-contact" href="#contact">
              Contact
            </NavLink>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default SlideBar;

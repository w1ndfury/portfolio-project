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

function SlideBar() {
  const [isOpen, setisOpen] = useState(false);

  const introLabel = "</Intro>";

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <Navbar dark className="pp-navbar" expand="sm">
      <Container>
        <NavbarBrand href="/" className="mr-auto">
          {introLabel}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavLink class="btn btn-about" href="#about">
              Summary
            </NavLink>
            <NavLink class="btn btn-experience" href="#experience">
              Experience
            </NavLink>
            <NavLink class="btn btn-contact" href="#contact">
              Contact
            </NavLink>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default SlideBar;

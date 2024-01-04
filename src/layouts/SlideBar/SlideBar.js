import React, { useState } from "react";
import "./SlideBar.css";
import { useNavigate } from "react-router-dom";

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
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";

function SlideBar() {
  const [isOpen, setisOpen] = useState(false);
  const navigate = useNavigate();
  const toggle = () => {
    setisOpen(!isOpen);
  };

  function onPlaygroundClick() {
    navigate("/playground");
  }

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
            <PrimaryButton
              label="Playground"
              onClick={onPlaygroundClick}
            ></PrimaryButton>
            <NavLink className="pp-nav-button" href="#about">
              Summary
            </NavLink>
            <NavLink className="pp-nav-button" href="#experience">
              Experience
            </NavLink>
            <NavLink className="pp-nav-button" href="#contact">
              Contact
            </NavLink>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default SlideBar;

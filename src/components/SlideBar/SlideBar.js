import React, { useState } from "react";


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Container,
    Label
  } from 'reactstrap';

function SlideBar() {

    const [isOpen, setisOpen] = useState(false);

    const toggle = ()=>{
      setisOpen(!isOpen);
    }
    
    return(
        <div>
            <Navbar dark expand="sm" style={{"height":"8vh" ,"z-index":"2"}}>
                <Container>
                <NavbarToggler onClick={toggle}/>
                
                <Collapse isOpen={isOpen} navbar>
                
                <Nav className="ml-auto" navbar>
                
                    <NavLink class="btn btn-about" href="#about">About</NavLink> 
                    <NavLink class="btn btn-experience" href="#experience">Experience</NavLink> 
                    <NavLink class="btn btn-contact" href="#contact">Contact</NavLink> 
                
                </Nav>
                
                </Collapse>
                </Container>
            </Navbar>
        </div>
    );

}

export default SlideBar


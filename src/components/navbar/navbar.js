import React from "react";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import './navbarStyle.css'; 

const Navbarcomp = () => {
    return(
     <Navbar fixed collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Container fluid>
            <Navbar.Brand href="#home">Sitaram Koundinya</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#about">About Me</Nav.Link>
                  <Nav.Link href="#timeline">Timeline</Nav.Link>
                  <NavDropdown title="Projects" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="https://dadjokes-react.herokuapp.com/">Dad Jokes</NavDropdown.Item>
                    <NavDropdown.Item href="https://nav360.in/stroll">Landing Page(for Nav360)</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link target="_blank" href="https://github.com/KoundinyaSi/Resume">
                    Project Repo <FaGithub />
                  </Nav.Link>
                    <Nav.Link href="#contact">
                      Contact me
                    </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
        </Navbar>
    )
}

export default Navbarcomp;
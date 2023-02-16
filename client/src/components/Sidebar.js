import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import buggin from './assets/buggin.png';

function Sidebar({ handleShow, handleProjectShow }) {


  return (

      <div className="sidebar">
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-box">
          <Navbar.Brand as="div" className="sidebar-title">
            <Image src={buggin} className="buggin-logo"/>
            <div className="buggin-title">Buggin' Out</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto flex-column sidebar-list">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <NavDropdown title="Projects" active="false" className="nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tickets" active="false" className="nav-dropdown">
                <NavDropdown.Item href="#action/3.1">My Tickets</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">All Tickets</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ticket 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={handleShow}>New Ticket</Nav.Link>
              <Nav.Link onClick={handleProjectShow}>New Project</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
}

export default Sidebar;

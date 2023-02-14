import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Sidebar() {


  const handleSidebarSelect = (eventKey) => { };
  return (
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-auto min-vh-100 bg-dark">
    //       <ul>
    //         <li>
    //           <SidebarDropdown />
    //         </li>
    //         <li>
    //           <SidebarDropdown />
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
      <div className="sidebar">
        <Navbar collapseOnSelect expand="lg" onSelect={handleSidebarSelect} variant="dark" className="nav-box">
          <Navbar.Brand as="div" className="sidebar-title">
            {/* <Image src="/assets/buggin.png" responsive /> */}
            {`Buggin' Out`}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto flex-column sidebar-list">
              <Nav.Link eventKey="Dash">Dashboard</Nav.Link>
              <NavDropdown title="Projects" active="false" className="nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tickets" active="false" className="nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ticket 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Ticket 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Ticket 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey="Create">New Ticket</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
  );
}

export default Sidebar;

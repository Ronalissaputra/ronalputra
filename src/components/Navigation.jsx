import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-gradient-to-r from-violet-500 to-teal-500 top-0 sticky"
    >
      <Container className="lg:px-20">
        <Navbar.Brand className="text-xl text-white">ronalputra</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="space-y-2 lg:space-y-0">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white py-2 rounded-md text-lg"
                  : "text-white py-2 rounded-md text-lg"
              }
            >
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

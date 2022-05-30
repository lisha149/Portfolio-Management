import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">Stock Portfolio management</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link>
              <NavLink to="/mystock">Stocks</NavLink>
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <NavDropdown title="Palisha Shakya" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  history.push("/");
                  window.location.reload();
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

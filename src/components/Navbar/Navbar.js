import React from "react";
import {
  Container,
  Form,
  FormControl,
  Button,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="nav-style">
          <Navbar.Brand href="#home">OnlineStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown
                title="Categories"
                id="basic-nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Cart</Nav.Link>
            </Nav>
            <Form className="d-flex search-style ">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="d-flex ">
              <Nav.Link href="/login">
                <Button variant="outline-primary">Login</Button>
              </Nav.Link>
              <Nav.Link href="/register">
                <Button>Register</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

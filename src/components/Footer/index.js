import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
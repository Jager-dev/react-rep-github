import React from 'react';
import {Container, Navbar} from "react-bootstrap";

const Footer = ({user}) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>{user.login}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
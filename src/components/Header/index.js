import React from 'react';
import {Container, Navbar} from "react-bootstrap";

const Header = ({setSearch, user}) => {
  return (
  <Navbar bg="dark" variant="dark" className="header">
    <Container>
        <img src={user.avatar_url} alt="" width="80"/>
        <Navbar.Brand className="ms-3">{user.login}</Navbar.Brand>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        <input className=" me-2" type="search" placeholder="Search" aria-label="Search"
               onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </Container>
  </Navbar>
  );
}

export default Header;
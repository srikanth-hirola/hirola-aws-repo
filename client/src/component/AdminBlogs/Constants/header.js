import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Logo from '../../../../public/images/logo.svg';

const Header = ({ navData }) => {
  return (
    <Navbar bg="light" expand="lg" className='sticky-top'>
      <Container>
        <Navbar.Brand href="/admin">
          {/* <img src='/images/logo.svg' alt="Hirolaimage" /> */}
          <h4 className='admin-header-title'>Welcome! Admin</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navData?.map((nav, index) => (
              <Nav.Link href={`${nav?.url}`} key={index}><button className='btn btn-md btn-primary'>{nav?.name}</button></Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

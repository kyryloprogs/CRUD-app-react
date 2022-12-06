import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const AppHeader = () => {
    return (
       <Navbar bg="dark" variant="dark">
         <Container>
          <Navbar.Brand href="/">CRUD Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add new person</Nav.Link>
          </Nav>
        </Container>
       </Navbar>
    )
}

export default AppHeader;

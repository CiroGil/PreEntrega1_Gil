import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Bahiana</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Lenceria</Nav.Link>
              <Nav.Link href="#pricing">Mallas</Nav.Link>
              <Nav.Link href="#pricing">Pijamas</Nav.Link>
              <Nav.Link href="#pricing">Sexy</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

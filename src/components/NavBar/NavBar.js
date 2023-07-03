import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Bahiana</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Lenceria</Nav.Link>
            <Nav.Link href="#pricing">Mallas</Nav.Link>
            <Nav.Link href="#pricing">Pijamas</Nav.Link>
            <Nav.Link href="#pricing">Sexy</Nav.Link>
            <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
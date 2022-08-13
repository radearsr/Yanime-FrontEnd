import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { FormSearch } from "../../";
import "./desktopNav.css";


const DesktopNav = () => {

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm desktop-nav" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">Yanime</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/history" >History</Nav.Link>
            <Nav.Link href="/about" >About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="desktop-form-search">
          <FormSearch />
        </div>
      </Container>
    </Navbar>
  );
}

export default DesktopNav;
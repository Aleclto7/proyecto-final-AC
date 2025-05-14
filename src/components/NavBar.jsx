import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <img
                    alt="icon"
                    src="https://images.icon-icons.com/2785/PNG/512/trolley_cart_icon_177366.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />
                <Navbar.Brand as={Link} to="/">Todo por 2 pesos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
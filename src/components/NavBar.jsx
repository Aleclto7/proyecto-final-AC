import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark underline" expand="lg" className="justify-content-between">
            <Container className='d-flex justify-content-between'>
                <div class='d-flex align-items-center'>
                    <img
                        alt="Logo"
                        src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-mascot-logo-red-bird-transparent-background-png-image_5949929.jpg"
                        width="40"
                        height="40"
                        class="d-inline-block align-top me-3 border-0 border-secondary rounded-circle"
                    />
                    <Navbar.Brand as={Link} to="/">Aguizon</Navbar.Brand>
                </div>
                <div class='d-flex align-items-center'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" variant='underline'>
                            <Nav.Link style={{margin: 'auto', padding: '0px'}} as={Link} to="/">AllProducts</Nav.Link>
                            <Nav.Link style={{margin: 'auto', padding: '0px'}} as={Link} to="/electronics">Electronics</Nav.Link>
                            <Nav.Link style={{margin: 'auto', padding: '0px'}} as={Link} to="/jewelery">Jewelery</Nav.Link>
                            <Nav.Link style={{margin: 'auto', padding: '0px'}} as={Link} to="/admin">Admin</Nav.Link>
                            <Nav.Link style={{margin: 'auto', padding: '0px'}} as={Link} to="/ShoppingCart">
                                <img 
                                    src="https://images.icon-icons.com/2785/PNG/512/trolley_cart_icon_177366.png" 
                                    alt="Icono Carrito" 
                                    width="35"
                                    height="35"
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}
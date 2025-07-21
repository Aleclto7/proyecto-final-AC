import {Navbar, Container, Nav, Offcanvas, Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../functions/UseAuthUtils';
import { useCart } from '../functions/CartContext';
import { useEffect, useState } from 'react';

export const NavBar = () => {
    const { cart } = useCart();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(0)
    
    const closeSession = () => {
        logout();
        navigate('/login');
    }

    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.quantity, 0)
        setQuantity(total)

    }, [cart]);

    const expand = 'md'

    return(
    <Navbar bg="dark" variant="dark" expand="md" className="mb-3">
    <Container fluid className="justify-content-between">
        <div className="d-flex align-items-center">
        <img
            alt="Logo"
            src="/apple-touch-icon.png"
            width="40"
            height="40"
            className="d-inline-block align-top me-3 border-0 border-secondary rounded-circle"
        />
        <Navbar.Brand as={Link} to="/">
            Aguizon
        </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />

        <Navbar.Offcanvas
        id="offcanvasNavbar-expand-md"
        aria-labelledby="offcanvasNavbarLabel-expand-md"
        placement="end"
        className="bg-dark text-white"
        style={{width: '13rem'}}
        >
        <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
            Menu
            </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 ">
            <Nav.Link as={Link} to="/" className="text-white d-flex align-items-center">
                AllProducts
            </Nav.Link>
            <Nav.Link as={Link} to="/electronics" className="text-white d-flex align-items-center">
                Electronics
            </Nav.Link>
            <Nav.Link as={Link} to="/kids" className="text-white d-flex align-items-center">
                Kids
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites" className="text-white d-flex align-items-center">
                Favorites
            </Nav.Link>

            {user && (
                <Nav.Link as={Link} to="/admin" className="text-white d-flex align-items-center">
                Admin
                </Nav.Link>
            )}

            {!user ? (
                <Nav.Link as={Link} to="/login" className="text-white d-flex align-items-center">
                Login
                </Nav.Link>
            ) : (
                <Nav.Link onClick={closeSession} className="text-white d-flex align-items-center" style={{ cursor: "pointer" }}>
                Log Out
                </Nav.Link>
            )}

            <Nav.Link as={Link} to="/ShoppingCart" className="position-relative d-block text-white d-flex align-items-center">
                <div className='position-relative'>
                    <img
                    src="https://images.icon-icons.com/2785/PNG/512/trolley_cart_icon_177366.png"
                    alt="Cart Icon"
                    width="35"
                    height="35"
                    />
                    {cart.length > 0 && (
                        <span
                            style={{ fontSize: '10px' }}
                            className="d-flex align-items-center justify-content-center h-50 w-50 position-absolute start-100 top-0 mt-2 translate-middle rounded-circle bg-secondary text-light"
                        >
                            {quantity}
                        </span>
                    )}
                </div>
            </Nav.Link>
            </Nav>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Container>
    </Navbar>
    )
}
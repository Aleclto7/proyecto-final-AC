import { Container, Card, Button, Row, Col} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { Cards } from '../components/Cards'
import { useCart } from '../functions/CartContext';
import { useEffect, useState } from 'react';

export const ShoppingCart = () => {
    const { cart, removeFromCart, decreseQuantity, increaseQuantity } = useCart();
    const [totalBill, setTotalBill] = useState(0)
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    useEffect(() => {
        if (cart.length > 0) {
        const total = cart.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)

            setTotalBill(total)
        } else {
        setTotalBill(0)}

    }, [cart])

    const shipping = 'Gratis'

    return (
        <Container className='min-vh-100 d-flex flex-column align-items-center w-100'>
            <h1 className='my-4'>Shopping Cart</h1>
            {cart.length === 0 
            ? 
            (
                <h4>The cart is empty</h4>
            ) 
            : 
            (
                <div>
                    {cart.map((item, index) => (
                        <Cards
                        widthCard='90vw'
                        generalClassName='d-flex flex-row align-items-center gap-3 bg-light border-light shadow-lg p-3 mb-4 rounded'
                        favButtonDisable={'d-none'}
                        priceContentClassName='d-flex justify-content-between align-items-center w-100 my-1'

                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        click={() => removeFromCart(item.id)}
                        buttonText={'Remove from Cart'}
                        display='d-block'
                        click2={() => decreseQuantity(item.id)}
                        bAddQuantity={'-'}
                        itemQuantity={` ${item.quantity} `}
                        click3={() => increaseQuantity(item.id)}
                        bDecreseQuantity={'+'}
                        >
                            {item.quantity * item.price}
                        </Cards>
                    ))}
                </div>
            )
            }
            {cart.length > 0 &&
                <div style={{minWidth:'90vw'}} className='d-flex justify-content-end'>
                    <Card style={{ width: '50vw', minWidth: '280px' , border: 'solid 1px rgba(214, 214, 214, 0.37)'}} className=' bg-light border-light shadow-lg mb-5 align-self-end'>
                        <Card.Body>
                        <Card.Title className="fs-5 fw-bold">Summary</Card.Title>

                        <Row className="mb-1">
                            <Col>Products</Col>
                            <Col className="text-end">{totalBill.toFixed(2)}</Col>
                        </Row>

                        <Row className="mb-1">
                            <Col>Shipping</Col>
                            <Col className="text-end">{shipping}</Col>
                        </Row>

                        <hr />

                        <Row className="mb-1">
                            <Col className="fw-bold">Total amount</Col>
                            <Col className="text-end fw-bold">{shipping === 'number' ? totalBill.toFixed(2) + shipping : totalBill.toFixed(2)}</Col>
                        </Row>
                        <p className="text-muted mb-0">(including VAT)</p>

                        <div className="d-flex justify-content-end">
                            <Button variant="dark" size="md" onClick={() => handleShow()}>
                            Go to checkout
                            </Button>
                            <Modal
                            size="sm"
                            show={showModal}
                            onHide={handleClose}
                            aria-labelledby="delete-product-modal bg-dark"
                            >
                            <Modal.Header closeButton className='py-2 border-light'>
                                <Modal.Title className='fs-5' >
                                    Oops! Not Ready Yet
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='py-2'>
                                Functionality still under development, sorry for the inconvenience.
                            </Modal.Body>
                            <Modal.Footer className='py-1 border-light'>
                                <Button variant="primary" onClick={() => handleClose()}>
                                    Ok
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        </div>
                        </Card.Body>
                    </Card>
                </div>
            }
        </Container>
    );
};
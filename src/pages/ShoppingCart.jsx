import { Container } from 'react-bootstrap'
import { printCard } from '../functions/addToCart'
import { Cards } from '../components/Cards'

export const ShoppingCart = () => {
    const cartItems = printCard()
    return (
        <Container className='mt-4'>
            <h1 >Shopping Cart</h1>
            {
                cartItems.length === 0 ? (
                    <h4>El carrito está vacío</h4>
                ) : (
                    <div>
                        {cartItems.map((item, index) => (
                            <Cards
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            >
                                {item.price}
                            </Cards>
                        ))}
                    </div>
                )
            }
        </Container>
    );
};
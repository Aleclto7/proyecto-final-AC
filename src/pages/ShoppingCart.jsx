import { Container } from 'react-bootstrap'
import { Cards } from '../components/Cards'
import { useCart } from '../functions/addAndDeleteToCart';

export const ShoppingCart = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <Container className='mt-4'>
            <h1 >Shopping Cart</h1>
            {
                cart.length === 0 ? (
                    <h4>El carrito está vacío</h4>
                ) : (
                    <div>
                        {cart.map((item, index) => (
                            <Cards
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            click={() => removeFromCart(item.id)}
                            botonText={'Remove from Cart'}
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
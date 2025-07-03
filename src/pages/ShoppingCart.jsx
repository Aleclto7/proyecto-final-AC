import { Container } from 'react-bootstrap'
import { Cards } from '../components/Cards'
import { useCart } from '../functions/addAndDeleteToCart';

export const ShoppingCart = () => {
    const { cart, removeFromCart, decreseQuantity, increaseQuantity } = useCart();

    return (
        <Container className='min-vh-100 d-flex flex-column align-items-center'>
            <h1 className='my-4'>Shopping Cart</h1>

            {
                cart.length === 0 ? (
                    <h4>El carrito está vacío</h4>
                ) : (
                    <div>
                        {cart.map((item, index) => (
                            <Cards
                            widthI='90vw'
                            generalClassName='d-flex flex-row align-items-center gap-3 mb-3 bg-light border-light shadow-lg p-3 mb-5 rounded'
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
                                {Math.trunc(item.quantity * item.price)} $
                            </Cards>
                        ))}
                    </div>
                )
            }
        </Container>
    );
};
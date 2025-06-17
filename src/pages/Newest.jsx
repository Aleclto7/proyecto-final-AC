import { Container } from "react-bootstrap";
import { Cards } from "../components/Cards";
export const Newest = () => {
    const localProducts = JSON.parse(localStorage.getItem('products'))

    return (
        <Container className="min-vh-100 mt-4">
            <div className='mt-5 mb-5' style={{display: 'grid', justifyItems: 'center',gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridTemplateRows: 'repeat(auto)', gap: '20px 20px'}}>
                {localProducts.map((item, index) => (
                    <Cards
                    key={index}
                    title={item.title}
                    description={item.description.slice(0, 100)}
                    image={item.image}
                    primaryDisplay='d-block mt-2'
                    click={() => addToCart(item)}
                    buttonText={'Add to Cart'}
                    widthI="20rem"
                    >
                        {item.price}
                    </Cards>
                ))}
            </div>
        </Container>
    )
}
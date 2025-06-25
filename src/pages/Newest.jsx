import { Container } from "react-bootstrap";
import { Cards } from "../components/Cards";
import { useCart } from "../functions/addAndDeleteToCart";

export const Newest = () => {
    let localProducts;
    const getLocalStorage = window.localStorage.getItem('products');

    const { addToCart } = useCart();
    
    if (!getLocalStorage|| getLocalStorage === 'undefined' || getLocalStorage === undefined) {
        localProducts = [];
    } else {
        localProducts = JSON.parse(getLocalStorage);
    }

    return (
        <Container className="min-vh-100 mt-4">
            <h1>Newest</h1>
            <div className='mt-5 mb-5' style={{display: 'grid', justifyItems: 'center',gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridTemplateRows: 'repeat(auto)', gap: '20px 20px'}}>
                {localProducts.length > 0 ?
                (localProducts.map((item, index) => (
                    <Cards
                    key={index}
                    title={item.title}
                    description={item.description.slice(0, 100)}
                    category={item.category}
                    image={item.image}
                    primaryDisplay='d-block mt-2'
                    click={() => addToCart(item)}
                    buttonText={'Add to Cart'}
                    widthI="20rem"
                    >
                        {item.price}
                    </Cards>
                    )))
                    :
                    <p>No hay productos recientes</p>
                }
            </div>
        </Container>
    )
}
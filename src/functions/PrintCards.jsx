import { UseFetch } from "./UseFetch";
import { Cards } from "../components/Cards";
import { Container } from "react-bootstrap";
import { useCart } from "./addAndDeleteToCart";

export const PrintCards = ({category, page,}) => {
    const { addToCart } = useCart();

    const [data, loading] = UseFetch('https://fakestoreapi.com/products');    
    if (loading) return <p>Cargando Productos...</p>

    const productsToShow = category
        ? data.filter(item => item.category === category)
        : data;

    return (
        <Container className='mt-4'>
            <h1>{page}</h1>
            <div className='mt-5 mb-5' style={{display: 'grid', justifyItems: 'center',gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridTemplateRows: 'repeat(auto)', gap: '20px 20px'}}>
                {productsToShow.map((item, index) => (
                    <Cards
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    click={() => addToCart(item)}
                    botonText={'Add to Cart'}
                    >
                        {item.price}
                    </Cards>
                ))}
            </div>
        </Container>
    )
}
import { Container } from 'react-bootstrap';
import { Cards } from '../components/Cards';
import { UseFetch } from '../components/UseFetch';



export const AllProducts = () => {
    const [data, loading] = UseFetch('https://fakestoreapi.com/products');
    
    if (loading) return <p>Cargando Productos...</p>
    console.log(data);
    
    return (
        <Container className='mt-4'>
            <h1>All Products</h1>
            <div class='mt-5 mb-5' style={{display: 'grid', justifyItems: 'center',gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridTemplateRows: 'repeat(auto)', gap: '20px 20px'}}>
                {data.map((item, index) => (
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
        </Container>
    );
}
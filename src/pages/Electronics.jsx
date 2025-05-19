import { Container } from 'react-bootstrap';
import { Cards } from '../components/Cards';
import { UseFetch } from '../components/UseFetch';

export const Electronics = () => {
    const [data, loading] = UseFetch('https://fakestoreapi.com/products');
    if (loading) return <p>Cargando Productos...</p>

    const electronics = data.filter(item => item.category === 'electronics');
    
    return (
        <Container className='mt-4'>
            <h1>Electronics</h1>
                <div class='mt-5 mb-5' style={{display: 'grid', justifyItems: 'center',gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridTemplateRows: 'repeat(auto)', gap: '20px 20px'}}>
                    {electronics.map((item, index) => (
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

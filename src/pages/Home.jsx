import { Container } from 'react-bootstrap';
import { Cards } from '../components/Cards';

export const Home = () => {
    return (
        <Container className='mt-4'>
            <h1>Home</h1>
            <p>Pagina de Inicio de la aplicacion</p>
            <Cards>30.0</Cards>
        </Container>
    );
    }
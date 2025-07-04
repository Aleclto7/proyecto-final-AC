import { PrintCards } from '../functions/PrintCards';
import { useProductCRUD } from "../functions/useProductCRUD";
import { Container } from "react-bootstrap";

export const Kids = () => {
    const category = 'Kids'
    const [data, loading, fetchError] = useProductCRUD();

    if (fetchError) return  <p>{fetchError}</p>
    if (loading) return <p>Cargando Productos...</p>
    
    const productsToShow = category
        ? data.filter(item => item.category === category)
        : data;

    return (
        <Container className='mt-4 min-vh-100'>
            <h1>Kids</h1>
            <PrintCards products ={productsToShow}/>
        </Container>
    );
    }

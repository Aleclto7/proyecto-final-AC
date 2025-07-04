import { PrintCards } from '../functions/PrintCards';
import { useProductCRUD } from "../functions/useProductCRUD";
import { Container } from "react-bootstrap";
import { SearchBar } from '../components/searchBar'
import { useState } from 'react'

export const AllProducts = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [data, loading, fetchError] = useProductCRUD();
    const category = ''
    
    if (fetchError) return  <p>{fetchError}</p>
    if (loading) return <p>Cargando Productos...</p>
    
    const productsToShow = category
        ? data.filter(item => item.category === category)
        : data;

    return (
        <Container className='mt-4 min-vh-100'>
            <h1>All Products</h1>
            <SearchBar data={data} setToFilter={setFilteredProducts}/>
            <PrintCards products ={filteredProducts ? filteredProducts : productsToShow }/>
        </Container>
    );
}
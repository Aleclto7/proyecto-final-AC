import { PrintCards } from '../functions/PrintCards';
import { useProductCRUD } from "../functions/useProductCRUD";
import { Container, Button } from "react-bootstrap";
import { SearchBar } from '../components/SearchBar'
import { useState } from 'react'
import { usePaginator } from '../components/usePaginator'

export const AllProducts = () => {
    const [isPaginator, setIsPaginator] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [data, loading, fetchError] = useProductCRUD();
    const {visibleProducts, printPaginator} = usePaginator(data)
    
    if (fetchError) return  <p>{fetchError}</p>
    if (loading) return <p>Cargando Productos...</p>
    
    return (
        <Container className='mt-4 min-vh-100'>
            <div className='d-flex justify-content-between mb-3'>
                <h1 className='mb-0'>All Products</h1>
                <Button className='btn-dark h-25 my-auto' onClick={() => setIsPaginator(!isPaginator)}>{isPaginator === true ? 'Search Bar' : 'Paginator'}</Button>
            </div>
            {!isPaginator 
                ?
                <SearchBar data={data} setToFilter={setFilteredProducts}/>
                :
                printPaginator

            }
            {!isPaginator 
                ?
                <PrintCards products ={filteredProducts ? filteredProducts : data}/>
                :
                <PrintCards products ={visibleProducts}/>
        }
        </Container>
    );
}
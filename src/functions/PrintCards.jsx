import { useProductCRUD } from "./useProductCRUD";
import { Cards } from "../components/Cards";
import { Container } from "react-bootstrap";
import { useCart } from "./addAndDeleteToCart";
import { useEffect } from "react";

export const PrintCards = ({category, page}) => {
    const { addToCart } = useCart();

    const [data, loading, error] = useProductCRUD();

    if (error) return  <p>{error}</p>
    if (loading) return <p>Cargando Productos...</p>
    
    const productsToShow = category
        ? data.filter(item => item.category === category)
        : data;
        console.log(productsToShow);
        

    return (
        <Container className='mt-4 min-vh-100'>
            <h1>{page}</h1>
            <div className='mt-5 mb-5' style={{display: 'grid', justifyItems: 'center',gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridTemplateRows: 'repeat(auto)', gap: '20px 20px'}}>
                {productsToShow.map((item, index) => (
                    <Cards
                    key={index}
                    title={item.title}
                    description={item.description.slice(0, 100)}
                    category={category}
                    image={item.image}
                    primaryDisplay='d-block mt-2'
                    click={() => addToCart(item)}
                    buttonText={'Add to Cart'}
                    >
                        {item.price}
                    </Cards>
                ))}
            </div>
        </Container>
    )
}
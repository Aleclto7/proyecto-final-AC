import { Container } from "react-bootstrap"
import { useFavorites } from "../functions/useFavorites"
import { PrintCards } from "../functions/PrintCards"

export const Favorites = () => {
    const {favorites} = useFavorites()
    return (
        <Container className='mt-4 min-vh-100'>
            <h1 className='my-4'>Favorites</h1>
            {
                favorites.length <= 0
                ? 
                (
                    <h4>You have no products in your favorites</h4>
                ) 
                : 
                (
                    <PrintCards products={favorites}/>
                )
            }
        </Container>    
    )
}
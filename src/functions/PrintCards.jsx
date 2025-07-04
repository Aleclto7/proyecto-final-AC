import { Cards } from "../components/Cards";
import { useCart } from "./addAndDeleteToCart";

export const PrintCards = ({products}) => {
    const { addToCart } = useCart();

    return (
        <div className='mt-5 mb-5' style={{display: 'grid', justifyItems: 'center',gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridTemplateRows: 'repeat(auto)', gap: '20px 20px'}}>
            {products.map((item, index) => (
                <Cards
                generalClassName='bg-light shadow-lg p-3 mb-5 rounded'
                key={index}
                title={item.title}
                description={item.description.slice(0, 100)}
                category={item.category}
                image={item.image}
                primaryDisplay='d-block mt-2'
                click={() => addToCart(item)}
                buttonText={'Add to Cart'}
                >
                    {item.price}
                </Cards>
            ))}
        </div>
    )
}
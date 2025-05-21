const cart = []
export function addToCart(product, data) { 

    const actualProduct = data.find(item => item.id === product.id)
    if (!cart.find(item => item.id === actualProduct.id)) {
    cart.push(actualProduct)
    }
    console.log(cart);
}

export default addToCart;
export const printCard = () => {return (cart)} 
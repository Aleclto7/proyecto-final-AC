import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        if (!cart.find(item => item.id === product.id)) {
            setCart([...cart, product])
        }
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId))
    }
    return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
    </CartContext.Provider>
)
}

export const useCart = () => useContext(CartContext)


// export function addToCart(product, data) { 
//     const [cart, setCart] = useState([])

//     const actualProduct = data.find(item => item.id === product.id)
//     if (!cart.find(item => item.id === actualProduct.id)) {
//     setCart(actualProduct)
//     }
//     console.log(cart);
// }

// export function deleteToCart(product, data) { 
//     setCart(cart.filter(item => item.id !== product.id))
// }
// export const productShoppingCart = addToCart(cart)
// console.log(productShoppingCart);


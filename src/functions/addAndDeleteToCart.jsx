import Swal from 'sweetalert2'
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {   // El contexto creado aplicara a todos los hijos que envuelva CartProvier. Por lo que debemos envolver todo el proyecto en main.js

    const [cart, setCart] = useState([])
    
    const addToCart = (product) => {    
        const existingProduct = cart.find(item => item.id === product.id)

        if(existingProduct) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                ? {...item, quantity: item.quantity + 1}
                : item
            )
            setCart(updatedCart)
        } else setCart([...cart, {...product, quantity: 1}])

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The product was successfully added.",
            showConfirmButton: false,
            timer: 900,
            backdrop: `
            rgba(0, 0, 0, 0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
            `
        });
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId))
    }

    const decreseQuantity = (productId) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId)
                if (item.quantity > 1) 
                    return {...item, quantity: item.quantity - 1}
                else return null
            else return item
        }).filter(Boolean)
        setCart(updatedCart)
    }
    const increaseQuantity = (productId) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId)
                return {...item, quantity: item.quantity + 1}
            else return item
        })
        setCart(updatedCart)
    }

    return (
    // CartContext.Provider permite que los componentes hijos accedan a los valores del contexto.
    // value={{}} define los valores que estarán disponibles en el contexto.
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreseQuantity, increaseQuantity }}>   
        {children}
    </CartContext.Provider>
)
}

export const useCart = () => useContext(CartContext)
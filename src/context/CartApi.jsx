import React, { createContext, useState } from 'react'
export const CartContext = createContext()
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (products) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === products.id);
            if (existingItem) {
                return prevCart.map(item => item.id === products.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            return [...prevCart, { ...products, quantity: 1 }]
        });
    }

    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    }

    const totalItem = cart.reduce((total, item) => total + (item.quantity || 0), 0);


    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, removeItem, totalItem, totalPrice }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartProvider
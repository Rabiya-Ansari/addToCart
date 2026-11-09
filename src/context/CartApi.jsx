import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast';
export const CartContext = createContext()
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (products) => {
        const existingItem = cart.find(item => item.id === products.id);

        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map(item =>
                    item.id === products.id ? { ...item, quantity: item.quantity + 1 } : item)
            );
        }
        else {
            setCart((prevCart) => [
                ...prevCart,
                { ...products, quantity: 1 }
            ]);

            toast.success("Item added successfully!");
        }
    }
    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
        toast.success("Item removed successfully!");
    }

    const increase = (id) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item))
    }
    const decrease = (id) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) } : item))
    }

    const totalItem = cart.length;


    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, removeItem, increase, decrease, totalItem, totalPrice }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartProvider
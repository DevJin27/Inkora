import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        const existingItem = cartItems.find(
            (item) => item.uniqueId === `${product.id}-${quantity}`
        );

        if (existingItem) {
            // Update quantity if the same product with the same uniqueId already exists
            setCartItems((prev) =>
                prev.map((item) =>
                    item.uniqueId === `${product.id}-${quantity}`
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            // Add the product as a unique entry
            const newProduct = {
                ...product,
                quantity,
                uniqueId: `${product.id}-${Date.now()}`, // Ensure unique ID with timestamp
            };
            setCartItems((prev) => [...prev, newProduct]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.uniqueId !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.uniqueId === productId ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

import React from 'react';
import { useCart } from '../context/CartContext'; // Use the context for cart items
import { FaTrash } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group'; // For smooth transition
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const CartSidebar = ({ isOpen, toggleSidebar }) => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    // Function to calculate total cost
    const calculateTotalCost = () => {
        return cartItems.reduce(
            (total, item) => total + item.volumeInfo.pageCount * item.quantity,
            0
        );
    };

    
    
    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="sidebar"
            unmountOnExit
        >
            <div className="cart-sidebar">
                <div className="sidebar-header">
                    <h3>Your Cart</h3>
                    <button onClick={toggleSidebar}><IoClose /></button>
                </div>
                <div className="sidebar-body">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty!</p>
                    ) : (
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.uniqueId}>
                                    <img
                                        src={item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
                                        alt={item.volumeInfo.title}
                                    />
                                    <div className="cart-sidebar-text">
                                        <h4>{item.volumeInfo.title}</h4>
                                        <p>${(item.volumeInfo.pageCount * item.quantity).toFixed(2)}</p>
                                        <div className="cart-sidebar-actions">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.uniqueId, Math.max(item.quantity - 1, 1))
                                                }
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.uniqueId, item.quantity + 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="sidebar-product-trashbtn">
                                        <button onClick={() => removeFromCart(item.uniqueId)}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="sidebar-footer">
                    {/* Total Cost Display */}
                    <div className="total-cost">
                        <h5>Total Cost:</h5>
                        <p>${calculateTotalCost().toFixed(2)}</p>
                    </div>
                    <Link to='/checkout' className="checkout-btn"> Checkout</Link>
                </div>
            </div>
        </CSSTransition>
    );
};

export default CartSidebar;

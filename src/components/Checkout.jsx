import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext"; // Import CartContext for order summary
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { toast } from 'react-toastify'; // Import toastify

const Checkout = () => {
    const { cartItems } = useCart();
    const stripe = useStripe();
    const elements = useElements();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle Button Click
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulate a payment process
        toast.success("Payment details submitted successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
        });
    };

    const calculateTotalCost = () => {
        return cartItems.reduce(
            (total, item) => total + item.volumeInfo.pageCount * item.quantity,
            0
        );
    };

    return (
        <>
            <section className="checkout-innerbanner">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="checkout-banner-text">
                                <h2>Checkout</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="payment-section">
                <Container>
                    <Row>
                        {/* Payment Form */}
                        <Col lg={8} md={8}>
                            <div className="payment-head">
                                <h3>Payment Details</h3>
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="input-box">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </Form.Group>
                                
                                <Form.Group className="input-box">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </Form.Group>
                                
                                <Form.Group className="input-box">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                    />
                                </Form.Group>

                                <Form.Group className="input-box">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Enter your address"
                                    />
                                </Form.Group>

                                <Form.Group className="input-box">
                                    <Form.Label>Card Details</Form.Label>
                                    <CardElement/>
                                </Form.Group>

                                {error && <div className="error-message">{error}</div>}

                                <div className="payment-btn">
                                    <button
                                        type="submit"
                                        className="theme_dark"
                                        disabled={isProcessing}
                                    >
                                        {isProcessing ? "Processing..." : "Proceed to Payment"}
                                    </button>
                                </div>
                            </Form>
                        </Col>

                        {/* Order Summary */}
                        <Col lg={4} md={4}>
                            <div className="order-summary">
                                <h3>Order Summary</h3>
                                <ul>
                                    {cartItems.map((item) => (
                                        <li key={item.uniqueId} className="d-flex justify-content-between">
                                            <span className="booknames">{item.volumeInfo.title}</span>
                                            <span>${(item.volumeInfo.pageCount * item.quantity).toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                                <hr />
                                <div className="order-payment d-flex justify-content-between">
                                    <h5>Total:</h5>
                                    <h5>${calculateTotalCost().toFixed(2)}</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Checkout;

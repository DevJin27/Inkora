import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaOpencart } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../context/CartContext';
import Reviews from '../../components/Reviews';

const ProductDetail = ({ data, setCartCount }) => {
    const { id } = useParams();
    const product = data.find((item, index) => index === parseInt(id));

    if (!product) {
        return <h2>Product not found!</h2>;
    }


    const { addToCart } = useCart();  // Access the addToCart function from context
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : prev));
    const handleAddToCart = () => {
        addToCart(product, quantity);
        setCartCount(prev => prev + quantity);
        toast.success(`${quantity} ${product.volumeInfo.title} book ${quantity > 1 ? 's' : ''} successfully added to the cart!`, {
            position: "top-right",
            autoClose: 3000,
        });
    };


    return (

        <>

            <section className="productdetail-innerbanner">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="productdetail-banner-text">
                                <h2>Product Detail</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="product-detail-sec">
                <Container>
                    <Row>
                        <Col lg={6} md={6}>
                            <div className="product-detail-img">
                                <img src={product.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'} alt={product.volumeInfo.title} />
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="product-detail-txt">
                                <h2>{product.volumeInfo.title}</h2>
                                <h3>Author: {product.volumeInfo.authors?.join(", ")}</h3>
                                <h4>${product.volumeInfo.pageCount}</h4>
                                <p>{product.volumeInfo.description}</p>
                                <div className="cart-counter">
                                    <button onClick={handleDecrement} disabled={quantity === 1}> - </button>
                                    <span className="quantity-display">{quantity}</span>
                                    <button onClick={handleIncrement}> + </button>
                                </div>
                                <button className="theme_dark" onClick={handleAddToCart}><FaOpencart /> Add to Cart</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Reviews />

        </>
    );
};

export default ProductDetail;

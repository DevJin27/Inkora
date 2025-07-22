import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../src/images/logo.png';
import cart from '../../src/images/cart.png';
import login from '../../src/images/user.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import { IoSearch } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';


const Header = ({ setSearchResults }) => {
    const [search, setSearch] = useState("")
    const { cartItems } = useCart();

    const searchBook = (e) => {
        if (e.key === 'Enter') {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDebV-45bMh4NXahYiJhXmyNRZ4pckSCG4&maxResults=40')
                .then(resp => setSearchResults(resp.data.items))
                .catch(err => console.log(err))
        }
    }

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearch = () => setIsSearchOpen((prev) => !prev);


    const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // Sidebar state
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev); // Properly toggles the sidebar state
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="header-main">
                <Container>
                    <Row>
                        <Col lg={2} md={6} xs={6}>
                            <div className="header-logo">
                                <Link to='/'><img src={logo} alt="logo" /></Link>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <nav className="header-nav">
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/shop'>Shop</Link></li>
                                    <li><Link to='/contact'>Contact Us</Link></li>
                                </ul>
                            </nav>
                        </Col>
                        <Col lg={5}>
                            <div className="search-bar">
                                <input type="search" name="" id="" value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} placeholder='Search for products...' />
                                <button type='submit' onClick={searchBook}>Search</button>
                            </div>
                        </Col>
                        <Col lg={1} md={6} xs={6}>
                            <div className="login-cart-btn">
                                <button onClick={toggleSearch}><IoSearch /></button>
                                <Link to='/login'><img src={login} alt="loginImg" /></Link>
                                <button onClick={toggleSidebar}>
                                    <img src={cart} alt="cartImg" />
                                    <span className="cart-count">{cartItems.length}</span>
                                </button>
                                <button className='hamburger' onClick={toggleMenu}><GiHamburgerMenu /></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <CartSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </header>


            {isSearchOpen && (
                <div className="search-popup">
                    <button className="close-btn" onClick={toggleSearch}>&times;</button>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={searchBook}
                        placeholder="Search for products..."
                    />
                </div>
            )}

            {isMenuOpen && (
                <div className="menu-popup">
                    <div className='sidebar-logo-closebtn'>
                        <Link to='/'><img src={logo} alt="logo" /></Link>
                        <button className="close-btn" onClick={toggleMenu}>&times;</button>
                    </div>
                    <nav className="sidemenu">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            )}


        </>
    );
};

export default Header;

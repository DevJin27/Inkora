import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FooterLogo from '../../src/images/logo.png'
import VisaImg from '../../src/images/visa.png'
import MasterImg from '../../src/images/master.png'
import GooglePay from '../../src/images/googlepay.png'
import ApplePay from '../../src/images/applepay.png'
import Paypal from '../../src/images/paypal.png'
import { FaFacebookF, FaGithub, FaInstagram, FaRegEnvelope, FaTwitter } from 'react-icons/fa'


const Footer = () => {
    return (

        <>
            <section className="subcribe-newsletter-sec">
                <Container>
                    <Row className="bg-newsletter">
                        <Col lg={8} md={7}>
                            <div className="subcribe-newsletter-head">
                                <h2>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h2>
                            </div>
                        </Col>
                        <Col lg={4} md={5}>
                            <div className="subcribe-newsletter-form">
                                <form>
                                    <div className='subscribe-input'>
                                        <input type="text" placeholder=" Enter your email address" />
                                        <span><FaRegEnvelope /></span>
                                    </div>

                                    <button type="submit">Subscribe to Newsletter</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer className="footer-sec">
                <Container>
                    <Row>
                        <Col lg={4} md={4}>
                            <div className="footer-logo">
                                <img src={FooterLogo} alt="" />
                                <p>We have books that suit your taste and spark imagination. From fiction to non-fiction.</p>
                                <ul>
                                    <li><a href="#" target='_blank'><FaTwitter /></a></li>
                                    <li><a href="#" target='_blank'><FaFacebookF /></a></li>
                                    <li><a href="#" target='_blank'><FaInstagram /></a></li>
                                    <li><a href="#" target='_blank'><FaGithub /></a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2} md={3} sm={6}>
                            <div className="footer-links">
                                <h4>Company</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2} md={3} sm={6}>
                            <div className="footer-links">
                                <h4>Help</h4>
                                <ul>
                                    <li><Link to="/about">Customer Support</Link></li>
                                    <li><Link to="/">Delivery Details</Link></li>
                                    <li><Link to="/">Terms & Conditions</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <div className="footer-links">
                                <h4>Faq</h4>
                                <ul>
                                    <li><Link to="/about">Account</Link></li>
                                    <li><Link to="/">Manage Deliveries</Link></li>
                                    <li><Link to="/">Orders</Link></li>
                                    <li><Link to="/">Payments</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <div className="footer-links">
                                <h4>Resources</h4>
                                <ul>
                                    <li><Link to="/about">Free eBooks</Link></li>
                                    <li><Link to="/">Development Tutorial</Link></li>
                                    <li><Link to="/">How to - Blog</Link></li>
                                    <li><Link to="/">Youtube Playlist</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="footer-copyright">
                                <p>Copyright © 2024 <strong>Shahdin Book Store.</strong> All rights reserved.</p>
                                <ul>
                                    <li><img src={VisaImg} alt="img" /></li>
                                    <li><img src={MasterImg} alt="img" /></li>
                                    <li><img src={Paypal} alt="img" /></li>
                                    <li><img src={ApplePay} alt="img" /></li>
                                    <li><img src={GooglePay} alt="img" /></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GiBookStorm, GiStairsGoal } from 'react-icons/gi'
import { MdOutlineHighQuality } from 'react-icons/md'

const WhyChooseUs = () => {
    return (
        <section className="whychooseus-sec">
            <h2 className='section-heading'>Why Choose Us</h2>
            <Container>
                <Row>
                    <Col lg={4} md={4}>
                        <div className="whychooseus-card">
                            <h6><GiBookStorm /></h6>
                            <h4>Wide Range of Books</h4>
                            <p>Our collection spans a variety of genres, making it easy for you to find the perfect book for any need or interest.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={4}>
                        <div className="whychooseus-card">
                            <h6><MdOutlineHighQuality /></h6>
                            <h4>Curated for Quality</h4>
                            <p>We carefully select books that offer the most valuable insights and impactful knowledge, ensuring that each book on our site is worth your time.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={4}>
                        <div className="whychooseus-card">
                            <h6><GiStairsGoal /></h6>
                            <h4>Dedicated to Your Success</h4>
                            <p>We believe in the power of books to change lives, and we are committed to providing you with the best resources to achieve your personal and professional goals.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChooseUs
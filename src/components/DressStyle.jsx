import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CasualImg from "../../src/images/motivation.webp"
import FormalImg from "../../src/images/self-improvement.webp"
import PartyImg from "../../src/images/popular.webp"
import GymImg from "../../src/images/coding.webp"

const DressStyle = () => {
    return (
        <section className='dress-style-sec'>
            <Container>
                <Row className="dress-bg">
                    <Col lg={12}>
                        <div className="dress-style-head">
                            <h2 className='section-heading'>EXPLORE BY CATEGORY</h2>
                        </div>
                    </Col>
                    <Col lg={5} md={5}>
                        <div className='dress-style-img'>
                            <img src={CasualImg} alt='Casual' />
                            <h6>Motivation</h6>
                        </div>
                    </Col>
                    <Col lg={7} md={7}>
                        <div className='dress-style-img'>
                            <img src={FormalImg} alt='Formal' />
                            <h6>Self-Improvement</h6>
                        </div>
                    </Col>
                    <Col lg={7} md={7}>
                        <div className='dress-style-img'>
                            <img src={PartyImg} alt='Party' />
                            <h6>Popular</h6>
                        </div>
                    </Col>
                    <Col lg={5} md={5}>
                        <div className='dress-style-img'>
                            <img src={GymImg} alt='Gym' />
                            <h6>Coding</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default DressStyle
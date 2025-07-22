import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from 'react-bootstrap'
import BrandLogoSlider from '../../components/BrandLogoSlider'
import DressStyle from '../../components/DressStyle'
import Products from '../../components/Products'
import AiExplain from '../../../src/images/ai-explained.png'
import LangChain from '../../../src/images/langchain-llm.jpg'
import LangGraph from '../../../src/images/mastering-langgraph.jpg'
import GenerativeAi from '../../../src/images/generative-ai.jpg'
import HackedAgain from '../../../src/images/hacked-again.jpg'
import OreallyAi from '../../../src/images/oreally-ai.png'
import CyberSecurity from '../../../src/images/cyber-security.jpg'
import AiForBussiness from '../../../src/images/ai-for-bussiness.jpg'
import GenerativeAi2 from '../../../src/images/generative-ai-2.jpg'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Reviews from '../../components/Reviews';




const Home = ({ deliverhome }) => {

  const fcd = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDebV-45bMh4NXahYiJhXmyNRZ4pckSCG4&maxResults=12');
      console.log(response.data); // Log the data to the console
    } catch (error) {
      console.error("Error fetching data:", error); // Handle any errors
    }
  };

  useEffect(() => {
    fcd(); // Call the function when the component mounts
  }, []);

  const homeProducts = deliverhome.slice(0, 12);
  const topSellingProducts = deliverhome.slice(0, 4);

  const booksettings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className="firt-banner-sec">
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className="first-banner-txt">
                <h2>DISCOVER BOOKS THAT INSPIRE AND EMPOWER</h2>
                <p>Unlock a world of coding mastery and motivational wisdom. Explore our handpicked collection of books designed to fuel your skills, spark creativity, and drive your personal and professional growth.</p>
                <Link to='/shop' className="theme_dark">Shop Now</Link>
                <div className="multipledata-count">
                  <div className="international-brands">
                    <CountUp start={0} end={200} delay={0}>{({ countUpRef }) => (
                      <div className='counter-plus'>
                        <h5 ref={countUpRef}>0</h5><span>+</span>
                      </div>
                    )}
                    </CountUp>
                    <p>International Brands</p>
                  </div>
                  <div className="quality-books">
                    <CountUp start={0} end={2000} delay={0}>{({ countUpRef }) => (
                      <div className='counter-plus'>
                        <h5 ref={countUpRef}>0</h5><span>+</span>
                      </div>
                    )}
                    </CountUp>
                    <p>High-Quality Books</p>
                  </div>
                  <div className="happy-customers">
                    <CountUp start={0} end={30000} delay={0}>{({ countUpRef }) => (
                      <div className='counter-plus'>
                        <h5 ref={countUpRef}>0</h5><span>+</span>
                      </div>
                    )}
                    </CountUp>
                    <p>Happy Customers</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="first-banner-img">
                <Slider {...booksettings}>
                  <div className='book-slider-img'>
                    <img src={AiExplain} alt='Book Image 1' />
                  </div>
                  <div className='book-slider-img'>
                    <img src={LangChain} alt='Book Image  2' />
                  </div>
                  <div className='book-slider-img'>
                    <img src={LangGraph} alt='Book Image 3' />
                  </div>
                  <div className='book-slider-img'>
                    <img src={GenerativeAi} alt='Book Image 3' />
                  </div>
                  <div className='book-slider-img'>
                    <img src={HackedAgain} alt='Book Image 3' />
                  </div>
                  <div className='book-slider-img'>
                    <img src={OreallyAi} alt='Book Image 3' />
                  </div>
                  <div className='book-slider-img'>
                    <img src={CyberSecurity} alt='Book Image 3' />
                  </div>
                  <div className='book-slider-img'>
                    <img src={AiForBussiness} alt='Book Image 3' />
                  </div>
                  <div className='book-slider-img'>
                    <img src={GenerativeAi2} alt='Book Image 3' />
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* <BrandLogoSlider /> */}


      <section className="arrival-books-sec">
        <Container>
          <Row className="arrival-books-bg">
            <Col lg={12}>
              <div className="arrival-books-head">
                <h2 className='section-heading'>New Additions to Inspire You</h2>
              </div>
            </Col>
          </Row>
          <Products data={homeProducts} />
          <Row>
            <Col lg={12}>
              <div className="view-all-btn">
                <Link to='/shop' className="theme_dark">View All</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="arrival-books-sec">
        <Container>
          <Row className="arrival-books-bg">
            <Col lg={12}>
              <div className="arrival-books-head">
                <h2 className='section-heading'>Top Selling</h2>
              </div>
            </Col>
          </Row>
          <Products data={topSellingProducts} />
          <Row>
            <Col lg={12}>
              <div className="view-all-btn">
                <Link to='/shop' className="theme_dark">View All</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <DressStyle />
      <Reviews />


    </>
  )
}

export default Home
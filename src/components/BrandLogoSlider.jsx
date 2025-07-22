import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrandLogoOne from '../../src/images/brandone.png';
import BrandLogoTwo from '../../src/images/brandtwo.png';
import BrandLogoThree from '../../src/images/brandthree.png';
import BrandLogoFour from '../../src/images/brandfour.png';
import BrandLogoFive from '../../src/images/brandfive.png';

const BrandLogoSlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,  
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
        <section className='brand-logo-slider'>
            <Container>
                <Row>
                    <Slider {...settings}>
                        <div className='brand-logo'>
                            <img src={BrandLogoOne} alt='Brand Logo 1' />
                        </div>
                        <div className='brand-logo'>
                            <img src={BrandLogoTwo} alt='Brand Logo 2' />
                        </div>
                        <div className='brand-logo'>
                            <img src={BrandLogoThree} alt='Brand Logo 3' />
                        </div>
                        <div className='brand-logo'>
                            <img src={BrandLogoFour} alt='Brand Logo 4' />
                        </div>
                        <div className='brand-logo'>
                            <img src={BrandLogoFive} alt='Brand Logo 5' />
                        </div>
                    </Slider>
                </Row>
            </Container>
        </section>
    );
};

export default BrandLogoSlider;

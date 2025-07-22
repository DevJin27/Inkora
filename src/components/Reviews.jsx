import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GoCheckCircleFill } from 'react-icons/go';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {


  const reviewsslider = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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


  const reviewsData = [
    {
      id: 1,
      name: "John Doe",
      stars: 5,
      review: "I'm amazed by the incredible collection at Shahdin Book Store. The variety of genres and high-quality books truly stand out. Every purchase has been a delightful experience!",
    },
    {
      id: 2,
      name: "Jane Smith",
      stars: 3,
      review: "Shahdin Book Store has an exceptional collection of books. From fiction to non-fiction, they have everything a reader could want. Every visit is a new discovery, and I always leave satisfied with my purchase."
    },
    {
      id: 3,
      name: "David Johnson",
      stars: 2,
      review: "I’ve found my go-to store for all things books at Shahdin Book Store. Their variety and quality are top-notch, making every book-buying experience enjoyable. I highly recommend it to any book lover!"
    },
    {
      id: 4,
      name: "Emily Brown",
      stars: 3,
      review: "Every time I shop at Shahdin Book Store, I’m amazed by the wide range of books available. It’s easy to find something new and interesting, and the customer service is always friendly and helpful!",
    },
    {
      id: 5,
      name: "Michael Lee",
      stars: 5,
      review: "Shahdin Book Store is my favorite spot for finding new reads. The selection is vast, and I always find something exciting. Whether for leisure or learning, it’s the perfect place to browse!"
    }
  ];


  return (
    <>
      <section className="our-customer-reviews">
        <Container>
          <Row>
            <Col lg="12">
              <div className="our-customer-header">
                <h2>Our Customer Reviews</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Slider {...reviewsslider}>
              {reviewsData.map((review) => (
                <Col lg={4} md={6} key={review.id} className="mb-4">
                  <div className="review-card">
                    <div className="review-stars">
                      {"★".repeat(review.stars)}{" "}
                      {"☆".repeat(5 - review.stars)} {/* Remaining empty stars */}
                    </div>
                    <div className="review-name">
                      <h4>{review.name} <GoCheckCircleFill /></h4>
                    </div>
                    <div className="review-text">
                      <p>{review.review}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Slider>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Reviews
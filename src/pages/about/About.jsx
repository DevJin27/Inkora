import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUs from "../../../src/images/about-img.webp";
import WhoWeAre from "../../../src/images/who-we-are.webp";
import WhyChooseUs from "../../components/WhyChooseUs";
import Reviews from "../../components/Reviews";

const About = () => {
  return (
    <>
      <section className="about-innerbanner">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="about-banner-text">
                <h2>About Us</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-us-sec">
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className="about-us-text">
                <p>
                  Welcome to <span>Inkoraa</span>, your go-to
                  destination for discovering, exploring, and embracing the
                  power of books! We are passionate about the transformative
                  power of reading and believe that books hold the key to
                  unlocking new perspectives, skills, and success. Whether
                  you're an avid reader, a professional looking to expand your
                  knowledge, or a curious mind seeking inspiration, we offer a
                  diverse range of books that cater to every interest and need.
                </p>
                <p>
                  From timeless classics to the latest bestsellers, we bring you
                  a carefully curated collection designed to ignite your
                  imagination and fuel your growth. At{" "}
                  <span>Inkoraa</span>, we are committed to
                  providing quality reads, seamless shopping experiences, and
                  unmatched customer support to make your journey with books
                  truly unforgettable.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="about-img">
                <img src={AboutUs} alt="about-us" />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="about-img">
                <img src={WhoWeAre} alt="about-us" />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="about-us-text">
                <h2>Who We Are</h2>
                <p>
                  At <span>Inkoraa</span>, we are a team of books
                  enthusiasts, industry experts, and learners who believe in the
                  incredible impact that books can have on personal and
                  professional development. Our mission is simple: to provide
                  our customers with access to a curated selection of books that
                  inspire, educate, and spark meaningful change. We are not just
                  a bookstore; we are a community of readers committed to
                  lifelong learning, growth, and discovery.
                </p>
                <p>
                  We understand the power of knowledge and strive to offer books
                  that cater to a variety of interests. From bestsellers and
                  timeless classics to niche topics and emerging trends, we
                  offer a broad selection that covers everything from technology
                  and business to self-development and creativity.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <WhyChooseUs />
      <Reviews />
    </>
  );
};

export default About;

import React, { useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { toast } from 'react-toastify';
import Reviews from '../../components/Reviews';

const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "943605d9-a72b-4101-b126-65867a87780a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setResult("");
      event.target.reset();
    } else {
      toast.error(`Error: ${data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setResult("");
    }
  };


  return (
    <>
      <div className="contact-innerbanner">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="contact-banner-text">
                <h2>Contact Us</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="contactus-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="form-main">
                <div className="title">
                  <h4>Contact Us</h4>
                  <h3>Write us a message</h3>
                </div>
                <form className="form" onSubmit={onSubmit}>
                  <Row>
                    <Col lg={6}>
                      <div className="form-group">
                        <label> Your Name<span>*</span> </label>
                        <input name="name" type="text" placeholder="" required/>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form-group">
                        <label> Your Subjects<span>*</span></label>
                        <input type="text" className='subject' name="subject" />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form-group">
                        <label> Your Email<span>*</span></label>
                        <input name="email" type="email" placeholder="" required />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="form-group">
                        <label> Your Phone<span>*</span></label>
                        <input name="phone" type="text" placeholder="" required/>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="form-group message">
                        <label> Your message<span>*</span> </label>
                        <textarea name="message" placeholder="" required></textarea>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="button">
                        <button type="submit" className="theme_dark"> Send Message</button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Reviews/>
    </>
  );
};

export default Contact;

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Products from '../../components/Products'
import Reviews from '../../components/Reviews'

const Shop = ({ deliverhome }) => {
  return (
    <>
    
    <section className="shop-innerbanner">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="shop-banner-text">
                <h2>Shop</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="shop-product-sec">
        <Container>
          <Products  data={deliverhome} />
        </Container>
      </section>

      <Reviews/>

    </>
  )
}

export default Shop
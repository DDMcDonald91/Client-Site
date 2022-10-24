import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'

export default function ProjectModal() {
    const [lgShow, setLgShow] = useState(false);
  
    return (
        <>
        <Button variant='outline-success' style={{fontFamily: "'Inika', serif"}} onClick={() => setLgShow(true)}>Learn More</Button>

        <Modal
          size="lg"
          className='font'
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton closeVariant='white' style={{background: 'black', color: 'white'}}>
            <Modal.Title id="example-modal-sizes-title-lg">
              <h1>service description</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{background: 'linear-gradient(black, #214440)', color: 'white'}}>
          <Container id='modal-image' className='mt-3 mb-3'></Container>
            <Container>
              <h2 className='mt-2 mb-5'>what we can do for your business:</h2>
              <Row>
                <Col xs={12} md={6}>
              <h2>branding</h2>
                <ul>
                  <li>Color scheme package</li>
                  <li>Typography sceme package including heading and body text</li>
                  <li>Social media templates including Facebook, Instagram, TikTok and more.</li>
                </ul>
                </Col>
                <Col xs={12} md={6}>
                <h2>design</h2>
                <ul>
                  <li>website wireframes</li>
                  <li>logo design</li>
                  <li>graphic design</li>
                  <li>product mockups for ecommerce business</li>
                  <li>social media banners including Facebook, Youtube, Twitch and more.</li>
                </ul>
                </Col>
                <Col xs={12} md={6}>
                <h2>marketing</h2>
                <ul>
                  <li>SEO optimization</li>
                  <li>marketing strategies</li>
                  <li>social media marketing templates</li>
                  <li>email marketing</li>
                </ul>
                </Col>
                <Col xs={12} md={6}>
                <h2>development</h2>
                <ul>
                  <li>custom website creation</li>
                  <li>wix, wordpress, shopify, squarespace, etc.</li>
                  <li>website redesign and editing</li>
                  <li>website optimization</li>
                </ul>
                </Col>
                </Row>
            </Container>
          </Modal.Body>
        </Modal>
        </>
    );
}

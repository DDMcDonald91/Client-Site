import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'

export default function ProjectModal() {
    const [lgShow, setLgShow] = useState(false);
  
    return (
        <>
        <Button variant='outline-success' style={{fontFamily: 'Montserrat, sans-serif'}} onClick={() => setLgShow(true)}>Learn More</Button>

        <Modal
          size="lg"
          className='font'
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton closeVariant='white' style={{background: 'black', color: 'white'}}>
          <motion.div 
            initial="hidden" 
            transition={{ duration: 1.5, delay: .25 }}
            whileInView="visible"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
              }}>
            <Modal.Title id="example-modal-sizes-title-lg">
              <h1>service description</h1>
            </Modal.Title>
            </motion.div>
          </Modal.Header>
          <Modal.Body style={{background: 'linear-gradient(black, #214440)', color: 'white'}}>
          <motion.div 
            initial="hidden" 
            transition={{ duration: 1.5, delay: .45 }}
            whileInView="visible"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
              }}
            viewport={{amount: 'some', once: true}}
            >
          <Container id='modal-image' className='mt-3 mb-3'></Container>
            <Container>
              <h2 className='mt-2 mb-5'>what we can do for your business:</h2>
              <Row>
                <Col xs={12} md={6}>
              <h2>branding</h2>
                <ul style={{fontFamily: 'Montserrat, sans-serif'}}>
                  <li>color palette</li>
                  <li>font pairings</li>
                  <li>mood board</li>
                </ul>
                </Col>
                <Col xs={12} md={6}>
                <h2>design</h2>
                <ul style={{fontFamily: 'Montserrat, sans-serif'}}>
                  <li>website wireframes</li>
                  <li>logo design</li>
                  <li>graphic design</li>
                  <li>product mockups for ecommerce businesses</li>
                  <li>email campaign</li>
                  <li>social media marketing assets for Facebook, Twitch, Youtube, and more</li>
                </ul>
                </Col>
                <Col xs={12} md={6}>
                <h2>marketing</h2>
                <ul style={{fontFamily: 'Montserrat, sans-serif'}}>
                  <li>SEO optimization</li>
                  <li>marketing strategies</li>
                </ul>
                </Col>
                <Col xs={12} md={6}>
                <h2>development</h2>
                <ul style={{fontFamily: 'Montserrat, sans-serif'}}>
                  <li>custom website creation</li>
                  <li>work with cms platforms: Wix, Wordpress, Shopify, Squarespace, etc.</li>
                  <li>website redesign and editing</li>
                  <li>website optimization</li>
                </ul>
                </Col>
                </Row>
            </Container>
            </motion.div>
          </Modal.Body>
        </Modal>
        </>
    );
}

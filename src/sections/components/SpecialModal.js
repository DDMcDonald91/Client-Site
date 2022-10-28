import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Modal, Button } from 'react-bootstrap'

export default function SpecialModal(props) {
    const [lgShow, setLgShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLgShow(true)
        }, [5000])
    }, [])
  
    return (
        <>
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
              }}
              viewport={{amount: 'some', once: true}}
              >
            <Modal.Title id="example-modal-sizes-title-lg">
              <h1>{props.title}</h1>
            </Modal.Title>
            </motion.div>
          </Modal.Header>
          <Modal.Body style={{background: 'linear-gradient(#214440, black)', color: 'white'}}>
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
          <Container id='special-modal-image' className='mt-3 mb-3'></Container>
              <h2 className='mt-2 mb-4'>what we can do for your business?</h2>
              <Container>
              <h2>essentaials custom 1 page website package</h2>
                <p>this is perfect for a business owner who needs a basic, hiqh quality website in a short period of time.</p>
                <ul style={{fontFamily: 'Montserrat, sans-serif'}}>
                  <li>custom 1 page website</li>
                  <li>moodboard</li>
                  <li>logo design</li>
                  <li>font pairings</li>
                  <li>website design and development</li>
                  <li>domain setup</li>
                  <li>choice between building platforms</li>
                  <li>full admin access</li>
                </ul>
                <p>...and more.</p>
                <p>4 day timeline</p>
                <p>$599.00</p>
                </Container>
                <a href="https://www.honeybook.com/widget/dmd_web_designs_236604/cf_id/635c30fce16f0c0031fefc0c" target='_blank'><Button style={{fontFamily: 'Montserrat, sans-serif'}} variant='success'>Book Now</Button></a>
            </motion.div>
          </Modal.Body>
        </Modal>
        </>
    );
}
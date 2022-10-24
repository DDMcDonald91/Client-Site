import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import './components/components.css'

export default function Contact() {
    const form = useRef();
    const success = () => toast("Thank you for contacting us! We'll be in touch soon.");
    const val = () => toast("There seems to be an error with your request. Please fill all inputs correctly.");
    const fail = () => toast("There seems to be an error with your request. Please try again.");


    const sendEmail = (e) => {
        e.preventDefault();

        if(!form.f_name || !form.l_name || !form.email || !form.message) {
            val()
            return
        }
    
        emailjs.sendForm('service_1tt57aa', 'template_r6fwi73', form.current, 'ROjDrDn9IcjRZkwBc')
          .then((result) => {
                success()
              console.log(result.text);
          }, (error) => {
                fail()
              console.log(error.text);
          });
      };

  return (
    <Container className='spacing'>
        <ToastContainer />
        <motion.div 
            initial="hidden" 
            transition={{ duration: 1.5, delay: .75 }}
            whileInView="visible"
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
                }}
            viewport={{amount: 'some', once: true}}
            >
        <h2 style={{color: 'white'}} className='heading'>contact us.</h2>
        <p style={{color: 'white'}}>If you would like to discuss your web design and development needs with us, please don't hesitate to contact us. We would be more than happy to answer any questions you may have. You can reach us by phone or email, or you can fill out our online contact form. We look forward to hearing from you soon!</p>
            <Container fluid style={{height: '30rem', backgroundImage: 'url("https://images.unsplash.com/photo-1561070791-36c11767b26a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80")', backgroundSize: 'cover'}}>
            </Container>
                <Form ref={form} onSubmit={sendEmail} className='w-80 mt-5 mb-2 p-2 font' style={{border: '1px solid white', color: 'white'}}>
                    <Row>
                        <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your first name" name="f_name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your last name" name="l_name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicBusinessName">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your business name" name="business" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" name="email" />
                    </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" style={{height: '10rem'}} type="message" placeholder="Leave us a message" name='"message' />
                    </Form.Group>
                    </Col>
                    <Button variant="outline-success" type="submit" className='w-50' style={{margin: '5px auto'}}>
                        Submit
                    </Button>
                    </Row>
                </Form>
                </motion.div>
    </Container>
  )
}

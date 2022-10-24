import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './components/components.css'

export default function About() {
  return (
    <Container className='mt-5 mb-5'>
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
    <h2 className='heading mb-3'>web design reimagined.</h2>
    <p>Welcome to DDM Web Designs where we help businesses improve their brand image by creating a professional, responsive website that is optimized for search engines and easy to navigate. Our team of web designers will create a visually stunning site that accurately reflects your brand identity. We also offer a range of additional services to help you get the most out of your website.</p>
    </motion.div>
    <motion.div 
      initial="hidden"
      transition={{ duration: 2, delay: .5 }} 
      whileInView="visible"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 400 }
        }}
      viewport={{amount: 'some', once: true}}
    >
    <Container id='about-image' className='mt-5 mb-3'></Container>
    </motion.div>
    <Row className='w-100 spacing'>
        <Col xs={12} md={6} className='p-0'>
        <motion.div 
          initial="hidden"
          transition={{ duration: 2, delay: .5 }} 
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -400 }
            }}
          viewport={{amount: 'some', once: true}}
          >
          <Container fluid className='p-0' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80")', backgroundPosition: 'right', height: '20rem', backgroundSize: 'cover'}}></Container>
          </motion.div>
        </Col>
        <Col xs={12} md={6} className='p-0'>
        <motion.div 
          initial="hidden"
          transition={{ duration: 2, delay: 1 }} 
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 400 }
            }}
          viewport={{amount: 'some', once: true}}
          >
            <Container fluid className='p-0' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80")', backgroundPosition: 'right', height: '20rem', backgroundSize: 'cover'}}></Container>
          </motion.div>
        </Col>
    </Row>
    </Container>
  )
}

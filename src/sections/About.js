import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './components/components.css'
import mockup  from '../images/mockup.png'
import mockup2  from '../images/mockup2.png'

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
    <h2 className='heading mb-3'>web design for small businesses.</h2>
      <p>Welcome to DDM Web Designs where we help small business owners turn their side hustle into a full time business! We do this by helping with brand image by creating a professional, responsive websites that are optimized for search engines and easy to navigate. Our team of experts will create a visually stunning site that accurately reflects your brand identity. We also offer a range of additional services to help you get the most out of your website.</p>
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
            hidden: { opacity: 0, x: -200 }
            }}
          viewport={{amount: 'some', once: true}}
          >
          <Container fluid className='p-0' style={{ backgroundImage: `url(${mockup})`, backgroundPosition: 'right', height: '20rem', backgroundSize: 'cover'}}></Container>
          </motion.div>
        </Col>
        <Col xs={12} md={6} className='p-0'>
        <motion.div 
          initial="hidden"
          transition={{ duration: 2, delay: .5 }} 
          whileInView="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 200 }
            }}
          viewport={{amount: 'some', once: true}}
          >
            <Container fluid className='p-0' style={{ backgroundImage: `url(${mockup2})`, backgroundPosition: 'right', height: '20rem', backgroundSize: 'cover'}}></Container>
          </motion.div>
        </Col>
    </Row>
    </Container>
  )
}

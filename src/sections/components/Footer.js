import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.div 
    initial="hidden" 
    transition={{ duration: 1.5, delay: .55 }}
    whileInView="visible"
    variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -400 }
        }}
    viewport={{amount: 'some', once: true}}
    >
      <Container className='d-flex justify-content-center' fluid style={{height: '10rem', position: 'relative'}}>
          <p style={{position: 'absolute', bottom: '0', fontSize: '16px', color: 'white'}}>© 2022 DDM Web Designs, all rights reserved. All trademarks are property of their respective owners.</p>
      </Container>
    </motion.div>

  )
}

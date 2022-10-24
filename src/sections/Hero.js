import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './components/components.css'

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
      >
      <Container fluid className='p-0' id='hero'></Container>
    </motion.div>

  )
}

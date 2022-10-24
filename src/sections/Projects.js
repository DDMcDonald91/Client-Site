import { Container, Row, Col } from 'react-bootstrap'
import SwiperGallery from './components/Swiper'
import Service from './components/Service'
import ProjectModal from './components/ProjectModal'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <Container className='mt-5'>
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
        <h2 className='heading'>your brand realized.</h2>
        <p>DDM Web Designs offers a simple way to get your website looking great. We work with you to design a professional, responsive website that meets your needs and provides an excellent user experience. Our team specializes in creating visually stunning websites that are optimized for search engines and easy to navigate.</p>
        <h2 style={{ color: 'white' }} className='heading mt-5'>recent projects.</h2>
        <p style={{ color: 'white' }}>If you would like to see examples of our work, please view our portfolio gallery below. You will find a selection of websites that we have designed for our clients. Each project is unique and tailored to the client's individual needs.</p>
        </motion.div>
        <Container className='mt-5 mb-5 p-0' fluid>
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
            <SwiperGallery />
            </motion.div>
        </Container>
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
        <h2 style={{ color: 'white' }} className='heading'>our services.</h2>
        <p style={{ color: 'white' }}>At DDM Web Designs, we offer a range of web design and development services to suit your needs. We can create a custom website for you from scratch, or we can redesign your existing site to give it a fresh, modern look. We also offer e-commerce solutions, social media integration, and online marketing services.</p>
        <Container fluid className='p-0'>
            <Row>
                <Col xs={12} md={6}>
                    <motion.div 
                        initial="hidden" 
                        transition={{ duration: 1.5, delay: .55 }}
                        whileInView="visible"
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -400 }
                            }}
                        viewport={{amount: 'some', once: true}}
                        >
                    <Service service={'branding.'} description={'DDM Web Designs offers a branding service that can help businesses improve their brand image to appeal to potential clients.'} />
                    </motion.div>
                </Col>
                <Col xs={12} md={6}>
                <motion.div 
                    initial="hidden" 
                    transition={{ duration: 1.5, delay: .55 }}
                    whileInView="visible"
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 400 }
                        }}
                    viewport={{amount: 'some', once: true}}
                    >
                    <Service service={'design.'} description={'Design services tailored for small and large businesses include wireframing, mockups, and more.'} />
                    </motion.div>
                </Col>
                <Col xs={12} md={6}>
                <motion.div 
                    initial="hidden" 
                    transition={{ duration: 1.5, delay: .65 }}
                    whileInView="visible"
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -400 }
                        }}
                    viewport={{amount: 'some', once: true}}
                    >
                    <Service service={'marketing.'} description={'Our agency offers marketing strategies geared to drive traffic to your business by utilizing multiple social media platforms.'} />
                    </motion.div>
                </Col>
                <Col xs={12} md={6}>
                <motion.div 
                    initial="hidden" 
                    transition={{ duration: 1.5, delay: .75 }}
                    whileInView="visible"
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 400 }
                        }}
                    viewport={{amount: 'some', once: true}}
                    >
                    <Service service={'development.'} description={'We provide developmental services provided to help upscale your business. We can create unique and custom elements to your website.'} />
                    </motion.div>
                </Col>
            </Row>
            <ProjectModal />
        </Container>
        </motion.div>
    </Container>
  )
}

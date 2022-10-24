import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import About from './sections/About';
import Navigation from './sections/components/Navigation';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Footer from './sections/components/Footer'

function App() {
  return (
    <Container fluid className='p-0'>
      <Navigation />
      <Hero />
      <Container fluid className='p-0' id='main-container'>
        <Container style={{ maxWidth: '60rem' }}>
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Container>
      </Container>
    </Container>
  );
}

export default App;

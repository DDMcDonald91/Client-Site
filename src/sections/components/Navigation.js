import { Container, Navbar } from 'react-bootstrap'
import '../components/components.css'

export default function Navigation() {
    return (
        <Navbar id='navigation' expand="lg" variant="light" className='w-100 pt-2 pb-2' style={{ zIndex: '1000', position: 'absolute' }}>
          <Container>
            <Navbar.Brand id='logo' href="#">DDM Web Designs</Navbar.Brand>
          </Container>
        </Navbar>
      );
}

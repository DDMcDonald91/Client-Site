import { Container, Navbar, Image } from 'react-bootstrap'
import logo from '../../images/logo.png'
import '../components/components.css'

export default function Navigation() {
    return (
        <Navbar id='navigation' expand="lg" variant="light" className='w-100 pt-2 pb-2' style={{ zIndex: '1000', position: 'absolute' }}>
          <Container>
            <Navbar.Brand id='logo' href="#">
              <Image src={logo} className='img-fluid p-0' height={250} width={250} />
              </Navbar.Brand>
          </Container>
        </Navbar>
      );
}

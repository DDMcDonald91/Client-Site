import { Container } from 'react-bootstrap'
import '../components/components.css'

export default function Service(props) {
  return (
    <Container style={{minHeight: '10rem'}} className='p-2 mt-3 mb-3 service'>
        <h2 className='service-heading'>{props.service}</h2>
        <p>{props.description}</p>
    </Container>
  )
}

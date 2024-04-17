import React from 'react'
import  {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
const APP_NAME: String = "bester";

const Header = () => {
  return (
    <Navbar expand="lg" className='fixed-top border-0  shadow-lg'
    style={{
        minHeight: '100px',
        backgroundColor: 'rgba(255,255,255,0.5)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center'
    }}>
        <Container>
            <Navbar.Brand>
                <Link to={APP_NAME + "/"} className='navbar-brand fw-bold text-warning'
                style={{
                    fontSize: '100'
                }}>
                    {/* <img src={Logo} alt=''/> */}
                    BESTER
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'
            style={{
                border: 'none',
                outline: 'none'
            }}/>
            <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100 '>
                <Nav.Link href="/" className='navigation-link text-black bg-transparent fw-bold'>home</Nav.Link>
                <Nav.Link href="/gallery" className='navigation-link text-black bg-transparent fw-bold'>gallery</Nav.Link>
                <Nav.Link href= "/events" className='navigation-link text-black bg-transparent fw-bold'>events</Nav.Link>
                <Nav.Link href="/shinkan" className='navigation-link text-black bg-transparent fw-bold'>shinkan</Nav.Link>
                <Nav.Link href="/contacts" className='navigation-link text-black bg-transparent fw-bold'>contacts</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
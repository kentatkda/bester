import React from 'react'
import  { Link, NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'

const Link = ({ name, link }: any) => {
    return <div className="menu">
      <a href={link}>{name}</a>
    </div>
  }

const APP_NAME = "bester"

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
                <Link to="/" className='navbar-brand fw-bold text-warning'
                style={{
                    fontSize: '100'
                }}>
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
                <Link name="home" className='navigation-link text-black bg-transparent fw-bold' link={'/' + APP_NAME } />
                <Link name="gallery" className='navigation-link text-black bg-transparent fw-bold' link={'/' + APP_NAME + '/gallery'} />
                <Link name="events" className='navigation-link text-black bg-transparent fw-bold' link={'/' + APP_NAME + '/events'} />
                <Link name="shinkan" className='navigation-link text-black bg-transparent fw-bold' link={'/' + APP_NAME + 'shinkan'} />
                <Link name="contacts" className='navigation-link text-black bg-transparent fw-bold' link={'/' + APP_NAME + 'contacts'} />
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
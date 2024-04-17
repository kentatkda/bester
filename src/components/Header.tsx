import React from 'react'
import  { Link, NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'


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
                <NavLink to="/" className='navigation-link text-black bg-transparent fw-bold'>home</NavLink>
                <NavLink to="/gallery" className='navigation-link text-black bg-transparent fw-bold'>gallery</NavLink>
                <NavLink to= "/events" className='navigation-link text-black bg-transparent fw-bold'>events</NavLink>
                <NavLink to="/shinkan" className='navigation-link text-black bg-transparent fw-bold'>shinkan</NavLink>
                <NavLink to="/contacts" className='navigation-link text-black bg-transparent fw-bold'>contacts</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
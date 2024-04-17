import React from 'react'
import  { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'

const APP_NAME = "bester";

const Header = () => {
    // const aLink = ({ name, link }: any) => {
    //     return <div className="menu">
    //         <a href={link}>{name}</a>
    //     </div>
    //     }
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
                <Link to="/bester" className='navbar-brand fw-bold text-warning'
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
                <Link className='navigation-link text-black bg-transparent fw-bold' to={'/' + APP_NAME } > home </Link>
                <Link className='navigation-link text-black bg-transparent fw-bold' to={'/' + APP_NAME + '/gallery' }> gallery </Link>
                <Link className='navigation-link text-black bg-transparent fw-bold' to={'/' + APP_NAME + '/events'}> events </Link>
                <Link className='navigation-link text-black bg-transparent fw-bold' to={'/' + APP_NAME + '/shinkan'}> shinkan </Link>
                <Link className='navigation-link text-black bg-transparent fw-bold' to={'/' + APP_NAME + '/contacts'}> contacts </Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
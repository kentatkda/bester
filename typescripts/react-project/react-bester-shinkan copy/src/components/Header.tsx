import React from 'react'
import  {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
// import Logo from './images/symbol/tennis.png'

const Header = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Navbar expand="lg" className='fixed-top border-0  shadow-lg'
    style={{
        minHeight: '100px',
        backgroundColor: 'rgba(255,255,255,0.5)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center'
    }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Container>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Navbar.Brand>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Link to="/" className='navbar-brand fw-bold text-warning'
                style={{
                    fontSize: '100'
                }}>
                    {/* <img src={Logo} alt=''/> */}
                    BESTER
                </Link>
            </Navbar.Brand>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Navbar.Toggle aria-controls='basic-navbar-nav'
            style={{
                border: 'none',
                outline: 'none'
            }}/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Navbar.Collapse id='basic-navbar-nav'>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Nav className='me-auto justify-content-end w-100 '>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Nav.Link class="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href='/' className='navigation-link text-black bg-transparent fw-bold'>home</Nav.Link>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Nav.Link href='/gallery' className='navigation-link text-black bg-transparent fw-bold'>gallery</Nav.Link>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Nav.Link href='/events' className='navigation-link text-black bg-transparent fw-bold'>events</Nav.Link>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Nav.Link href='/shinkan' className='navigation-link text-black bg-transparent fw-bold'>shinkan</Nav.Link>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Nav.Link href='/contacts' className='navigation-link text-black bg-transparent fw-bold'>contacts</Nav.Link>
                {/* <form>
                    <button href='/contacts' class="btn btn-outline-dark me-2 navigation-link text-black bg-transparent fw-bold" type="button"> Contacts</button>
                </form> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
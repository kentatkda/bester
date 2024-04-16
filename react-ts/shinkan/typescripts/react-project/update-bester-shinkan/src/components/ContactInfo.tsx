import React from "react";
import { Form } from 'react-bootstrap';

function ContactInfo() {
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="fs-1 mb-3 text-uppercase fw-bold">Where To Find Us</h2>
            <p className="mb-5">47 Baker Street, London LD1 0ND</p>
            <h3>Opening Hours</h3>
            <p className="m-0">Mon - Fri: 09:00 - 17:00</p>
            <p>Sat - Sun: 10:00 - 15:00</p>
        </div>
    )
}

export default function Contact() {
    return (
        <div className='contact-page'>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <ContactInfo />
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <Form>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='first-name'>First Name</Form.Label>
                                    <Form.Control type='text' id='first-name' />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='last-name'>Last Name</Form.Label>
                                    <Form.Control type='text' id='last-name' />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='email-address'>Email Address</Form.Label>
                                    <Form.Control type='email' id='email-address' />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
                                    <Form.Control type='tel' id='phone-number' />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='date'>Date</Form.Label>
                                    <Form.Control type='date' id='date' />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='guests-number'>Number Of Guests</Form.Label>
                                    <Form.Control type='number' id='guests-number' />
                                </div>
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                <Form.Label htmlFor='comments'>Comments</Form.Label>
                                <Form.Control type='textarea' id='comments' />
                            </Form.Group>

                            <button type='submit' className='btn btn-success btn-lg'>Submit</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

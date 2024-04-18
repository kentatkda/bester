import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// @ts-expect-error TS(2307): Cannot find module './images/events/christmasparty... Remove this comment to see the full error message
import AprilImg from './images/home/Calendar.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/hanabi.jpg' or... Remove this comment to see the full error message
import MayImg from './images/home/may-calendar.jpg'


export default function Calendar() {
  return (
    <div className="text-center" style={{
        alignContent: 'center',
        justifyContent: 'center',
        margin: 'auto',
    }}>
        <Carousel className='container'>
        <Carousel.Item>
            <img className='img-fluid border border-4 border-dark' src={AprilImg} alt="" style={{maxHeight: '300px', objectFit: 'cover'}}/>
        </Carousel.Item>
        <Carousel.Item>
            <img className='img-fluid border border-4 border-dark' src={MayImg} alt="" style={{maxHeight: '300px', objectFit: 'cover'}} />
        </Carousel.Item>
        </Carousel>
    </div>
  )
}
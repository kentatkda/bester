import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// @ts-expect-error TS(2307): Cannot find module './images/events/BBQ.jpg' or it... Remove this comment to see the full error message
import BBQImg from './images/events/BBQ.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/christmasparty... Remove this comment to see the full error message
import ChristmasImg from './images/events/christmasparty.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/events/hanabi.jpg' or... Remove this comment to see the full error message
import HanabiImg from './images/events/hanabi.jpg'

function ImagesSlide() {
  return (
    <Carousel className='container'>
      <Carousel.Item>
        <img className='img-fluid border border-4 border-dark' src={BBQImg} alt="" style={{maxHeight: '300px', objectFit: 'cover'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid border border-4 border-dark' src={HanabiImg} alt="" style={{maxHeight: '300px', objectFit: 'cover'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid border border-4 border-dark' src={ChristmasImg} alt="" style={{maxHeight: '300px', objectFit: 'cover'}} />
      </Carousel.Item>
    </Carousel>

  )
}

export default ImagesSlide

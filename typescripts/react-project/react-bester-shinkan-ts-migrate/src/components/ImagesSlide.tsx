import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import BBQImg from './images/events/BBQ.jpg'
import ChristmasImg from './images/events/christmasparty.jpg'
import HanabiImg from './images/events/hanabi.jpg'

function ImagesSlide() {
  return (
    <Carousel className='container'>
      <Carousel.Item>
        <img className='img-fluid border border-4 border-dark' src={BBQImg} alt="" style={{maxHeight: '300px', objectFit: 'cover'}}/>
        {/* <Carousel.Caption>
          <h3> BBQ </h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid border border-4 border-dark' src={HanabiImg} alt="" style={{maxHeight: '300px', objectFit: 'cover'}}/>
        {/* <Carousel.Caption>
          <h3> 花火大会 </h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-fluid border border-4 border-dark' src={ChristmasImg} alt="" style={{maxHeight: '300px', objectFit: 'cover'}} />
        {/* <Carousel.Caption>
          <h3> クリスマスパーティ </h3>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>

  )
}

export default ImagesSlide

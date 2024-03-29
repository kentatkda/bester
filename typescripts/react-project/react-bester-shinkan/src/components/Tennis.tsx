import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/home/TennisImg.jpg' o... Remove this comment to see the full error message
import TennisIrast from './images/home/TennisImg.jpg'
import { Button } from 'react-bootstrap'
const ButtonComponent = () => {

  return (
  <div className='button'
  style={{
    textAlign: 'center',
    marginTop: '50px',
  }}>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCYrwDQU9gSNg9isITgTPw2vnQl_xYLTqYerwSaZ7WGVp2SA/viewform">
          <Button variant="warning">練習に参加 →</Button>
      </a>
  </div>)
};


function Tennis() {
  return (
      <div className='bg-dark text-light py-5'>
        <p className="text-center fs-1 mb-5 text-uppercase fw-bold z-index-100" style={{
            color: 'white',
            marginTop: '10vh'
        }}> Tennis</p>
        <div className='container justify-content-center text-align-center'
        >
            <div className='row' 
            style={{
              // width: '80%',
              justifyContent: 'center',
              alignContent: 'space-between',
              margin: 'auto',
              marginBottom: '15vh'
            }}>
                <div className='col-md-5 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-2'
                style={{
                  marginTop: '20px',
                }}>
                    <div>
                      練習頻度は週2回程度で、
                      練習場所は主に浮間舟渡/茗荷谷/駒場などで家が近い練習場所に参加できます！
                      団体戦のチームに参加すると大会前に練習を増やすことも可能です！
                    </div>
                    <ButtonComponent/>
                </div>
                <div className='col-md-5 d-flex justify-content-center'>
                    <img src={TennisIrast} className='img-fluid border border-4 border-white' alt="" style={{maxWidth: '400px', overflow:'hidden',}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tennis

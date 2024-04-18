import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/home/TennisImg.jpg' o... Remove this comment to see the full error message
import TennisIrast from './images/home/TennisImg.jpg'


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
              width: '90%',
              justifyContent: 'center',
              alignContent: 'space-around',
              margin: 'auto',
              marginBottom: '15vh'
            }}>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 '
                style={{
                  marginTop: '20px',
                  maxWidth: '450px',
                  textAlign: 'center'
                }}>
                    <div>
                      練習頻度は週2回程度。
                      練習場所は主に浮間舟渡/茗荷谷/駒場などで家が近い練習場所に参加できます。
                      経験者と初心者の割合はおよそ半々なので、初心者の方もテニスを始めやすい環境になっています。
                    </div>
                    {/* <ButtonComponent/> */}
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={TennisIrast} className='img-fluid border border-4 border-white' alt="" style={{maxWidth: '400px', overflow:'hidden',}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tennis

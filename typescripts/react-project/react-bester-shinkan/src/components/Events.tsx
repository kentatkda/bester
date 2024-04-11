// import React from 'react'
// import EventImg from './images/event.png'
import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagesSlide from './ImagesSlide.tsx';



const ButtonComponent = () => {

    return (
    <div className='container '>
        <div className="row" style={{
            justifyContent: 'center',
            alignContent: 'center',
            margin: 'auto',
        }}>
            <div className='col-lg-4 col-md-5 col-sm-6 text-center'
            style={{
                textAlign: 'center',
                margin :'auto',
                marginTop: '40px',
            }}>
                <Link to="/events">
                    <Button variant="warning">詳しく見る →</Button>
                </Link>
            </div>
            <div className='col-lg-4 col-md-5  col-sm-6 text-center'
            style={{
                textAlign: 'center',
                margin :'auto',
                marginTop: '40px',
            }}>
            </div>
        </div>
  </div>
  )
};

function Events() {
    return(
        <div className=' text-light py-5'
        style={{
            marginTop: '15vh',
            marginBottom: '30vh'
        }}>
            <p className="text-center fs-1 mb-5 text-uppercase fw-bold z-index-100" style={{
                color: 'black',
                marginTop: '10vh',
            }}> Events</p>
            <div className='container justify-content-space-between text-align-center'
            style={{
            marginBottom: '10vh',
            justifyContent: 'center',
            textAlign: 'center',
            margin: 'auto',
            }}>
                <div className='row'
                style={{
                width: '90%',
                justifyContent: 'center',
                textAlign: 'center',
                margin: 'auto',
                }}>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <ImagesSlide/>
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 text-dark'
                    style={{
                        marginTop: '20px',
                        maxWidth: '550px'
                    }}>
                        <div>
                            べスターでは月に1回ほどでイベントを開催しています。
                            BBQ / 花火大会 / クリスマスパーティなど季節感のあるイベント盛りだくさんで盛り上がること間違いなし！
                            アットホームな雰囲気が特徴です！
                        </div>
                        <div style={{
                            maxWidth: '300px',
                            justifyContent: 'center',
                            alignContent: 'center',
                            margin: 'auto'
                        }}>
                            <ButtonComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default Events
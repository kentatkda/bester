// import React from 'react'
// import EventImg from './images/event.png'
import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagesSlide from './ImagesSlide';



const ButtonComponent = () => {

    return (
    <div
    style={{
        marginTop: '50px',
        textAlign: 'center'
    }}>
        <Link to="/events">
            <Button variant="warning">View More →</Button>
        </Link>
    </div>)
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
                    <div className='col-md-6 d-flex justify-content-center'>
                        <ImagesSlide/>
                    </div>
                    <div className='col-md-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-2 text-dark'
                    style={{
                        marginTop: '20px',
                    }}>
                        <div>
                            べスターでは月に1回ほどでイベントを開催しています。
                            BBQ / 花火大会 / クリスマスパーティなど季節感のあるイベント盛りだくさんで盛り上がること間違いなし！
                            アットホームな雰囲気が特徴です！
                        </div>
                        <ButtonComponent/>
                    </div>
                </div>
            </div>
        </div>
        )
}

// function Events() {
//   return (
//     <div className="events" >
//         <section id="event">
//             <div className='head'>
//                 <h1 className='title'>Event</h1>
//                 <img className='eventImg' src={EventImg} alt=''/>
//                 <div class="overlay"></div>
//             </div>
//             <div className='body'>
//                 {/* <img className='left' src={BBQImg} alt=""/> */}
//                 <ImagesSlide/>
//                 <div className='right'>
//                     <div className='caption'>
//                         べスターでは月に1回ほどでイベントを開催しています。
//                         BBQ / 花火大会 / クリスマスパーティなど季節感のあるイベント盛りだくさんで盛り上がること間違いなし！                
//                         アットホームな雰囲気が特徴です！
//                     </div>
//                     <ButtonComponent/>
//                 </div>
//             </div>
//         </section>
//     </div>
//   )
// }

export default Events

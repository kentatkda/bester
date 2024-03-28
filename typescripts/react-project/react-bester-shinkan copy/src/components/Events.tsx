// import React from 'react'
// import EventImg from './images/event.png'
import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-expect-error TS(6142): Module './ImagesSlide' was resolved to 'C:/Users/M... Remove this comment to see the full error message
import ImagesSlide from './ImagesSlide';



const ButtonComponent = () => {

    return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div
    style={{
        marginTop: '50px',
        textAlign: 'center'
    }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link to="/events">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button variant="warning">View More →</Button>
        </Link>
    </div>)
};

function Events() {
    return(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className=' text-light py-5'
        style={{
            marginTop: '15vh',
            marginBottom: '30vh'
        }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className="text-center fs-1 mb-5 text-uppercase fw-bold z-index-100" style={{
                color: 'black',
                marginTop: '10vh',
            }}> Events</p>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className='container justify-content-space-between text-align-center'
            style={{
            marginBottom: '10vh',
            justifyContent: 'center',
            textAlign: 'center',
            margin: 'auto',
            }}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className='row'
                style={{
                width: '90%',
                justifyContent: 'center',
                textAlign: 'center',
                margin: 'auto',
                }}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className='col-md-6 d-flex justify-content-center'>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <ImagesSlide/>
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className='col-md-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-2 text-dark'
                    style={{
                        marginTop: '20px',
                    }}>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div>
                            べスターでは月に1回ほどでイベントを開催しています。
                            BBQ / 花火大会 / クリスマスパーティなど季節感のあるイベント盛りだくさんで盛り上がること間違いなし！
                            アットホームな雰囲気が特徴です！
                        </div>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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

import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/home/Calendar.jpg' or... Remove this comment to see the full error message
import Calendar from './images/home/Calendar.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// @ts-expect-error TS(6142): Module './ShinkanJoinButton' was resolved to 'C:/U... Remove this comment to see the full error message
import ShinkanJoinButton  from './ShinkanJoinButton';
 
const ButtonComponent = () => {

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className='container '>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className='row'
        style={{
            justifyContent: 'center',
            alignContent: 'center',
            margin: 'auto',
            marginTop: '15vh',
        }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className='col-5 text-center my-2 mx-1'
            style={{
                textAlign: 'center',
                justifyContent: 'center',
                margin :'auto',
                marginTop: '50px',
            }}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Link to="/shinkan">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Button variant="warning">詳しく見る →</Button>
                </Link>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className='col-5 text-center my-2 mx-1' style={{
                justifyContent: 'center',
                margin: 'auto'
            }}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <ShinkanJoinButton/>
            </div>
        </div>
  </div>
  )
};

const CalendarSlides = () => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className='d-flex justify-content-center'>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <img className='img-fluid border border-3 border-dark' src={Calendar} alt="" style={{maxHeight: '300px', objectFit: 'cover'}}/>
        </div>
    )
}





function JoinUs() {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className='bg-dark text-light py-5 shadow'>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className="text-center fs-1 mb-5 text-uppercase fw-bold z-index-100" style={{
                color: 'white',
                marginTop: '10vh'
            }}> JOIN US</p>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className='container justify-content-center text-align-center'
            style={{
            marginBottom: '10vh'
            }}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className='row'>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className='col-md-6 d-flex justify-content-center'>
                        {/* <CalendarComponent/> */}
                        {/* <img src={CalendarImg} className='img-fluid width-60 ' alt="" /> */}
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <CalendarSlides/>
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className='col-md-5 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-2'
                    style={{
                        maxWidth: '80%',
                        justifyContent: 'center',
                        margin: 'auto',
                        marginTop: '20px',
                    }}>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <div className='text-center'>
                        一度、練習やイベント・合宿に参加してBESTERの雰囲気を味わってみませんか？
                        今年の新歓日程はカレンダーの通りです。是非一度遊びに来てください！
                        </div>
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <ButtonComponent/>
                    </div>
                </div>
            </div>
        </div>
)
}

export { CalendarSlides }

export default JoinUs

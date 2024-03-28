import React from 'react'
import Calendar from './images/home/Calendar.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ShinkanJoinButton  from './ShinkanJoinButton';
 
const ButtonComponent = () => {

  return (
    <div className='container '>
        <div className='row'
        style={{
            justifyContent: 'center',
            alignContent: 'center',
            margin: 'auto',
            marginTop: '15vh',
        }}>
            <div className='col-5 text-center my-2 mx-1'
            style={{
                textAlign: 'center',
                justifyContent: 'center',
                margin :'auto',
                marginTop: '50px',
            }}>
                <Link to="/shinkan">
                    <Button variant="warning">詳しく見る →</Button>
                </Link>
            </div>
            <div className='col-5 text-center my-2 mx-1' style={{
                justifyContent: 'center',
                margin: 'auto'
            }}>
                <ShinkanJoinButton/>
            </div>
        </div>
  </div>
  )
};

const CalendarSlides = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img className='img-fluid border border-3 border-dark' src={Calendar} alt="" style={{maxHeight: '300px', objectFit: 'cover'}}/>
        </div>
    )
}





function JoinUs() {
    return (
        <div className='bg-dark text-light py-5 shadow'>
            <p className="text-center fs-1 mb-5 text-uppercase fw-bold z-index-100" style={{
                color: 'white',
                marginTop: '10vh'
            }}> JOIN US</p>
            <div className='container justify-content-center text-align-center'
            style={{
            marginBottom: '10vh'
            }}>
                <div className='row'>
                    <div className='col-md-6 d-flex justify-content-center'>
                        {/* <CalendarComponent/> */}
                        {/* <img src={CalendarImg} className='img-fluid width-60 ' alt="" /> */}
                        <CalendarSlides/>
                    </div>
                    <div className='col-md-5 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-2'
                    style={{
                        maxWidth: '80%',
                        justifyContent: 'center',
                        margin: 'auto',
                        marginTop: '20px',
                    }}>
                        <div className='text-center'>
                        一度、練習やイベント・合宿に参加してBESTERの雰囲気を味わってみませんか？
                        今年の新歓日程はカレンダーの通りです。是非一度遊びに来てください！
                        </div>
                        <ButtonComponent/>
                    </div>
                </div>
            </div>
        </div>
)
}

export { CalendarSlides }

export default JoinUs

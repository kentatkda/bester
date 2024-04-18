import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/home/Calendar.jpg' or... Remove this comment to see the full error message
import Calendar from './Calendar.tsx'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ModalComponent from './ModalComponent.tsx';

const ButtonComponent = () => {

    return (
    <div className='container '>
        <div className="text-center" style={{
            justifyContent: 'center',
            alignContent: 'center',
            margin: 'auto',
            marginTop: '40px',
            display: 'flex'
        }}>
            <Link to="/bester/shinkan">
                <Button variant="warning">詳しく見る →</Button>
            </Link>
            <ModalComponent fontSize={'16px'} />
        </div>
  </div>
  )
};






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
                <div className='row' style={{
                    width: '90%',
                    justifyContent: 'center',
                    alignContent: 'center',
                    margin: 'auto'
                }}>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <Calendar/>
                    </div>
                    <div className='col-lg-5 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-2'
                    style={{
                        maxWidth: '500px',
                        justifyContent: 'center',
                        margin: 'auto',
                        marginTop: '20px',
                    }}>
                        <div className='text-center'>
                        一度、練習やイベント・合宿に参加してBESTERの雰囲気を味わってみませんか？
                        今年の新歓日程はカレンダーの通りです。是非一度遊びに来てください！
                        </div>
                        <div style={{
                            maxWidth: '300px'
                        }}>
                            <ButtonComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}


export default JoinUs

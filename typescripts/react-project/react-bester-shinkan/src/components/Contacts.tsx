import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/symbol/insta_logo.png'... Remove this comment to see the full error message
import  InstaImage from './images/symbol/insta_logo.png'
// @ts-expect-error TS(2307): Cannot find module './images/symbol/x_logo.png' o... Remove this comment to see the full error message
import XImage from './images/symbol/x_logo.png'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactInfo() {
    return (
        <div className="d-flex flex-column justify-content-center text-align-center"
        >
            <h1 className='mb-3 d-flex text-uppercase fw-bold justify-content-center' 
            style={{
            }}>
                <p className='text-warning'> Follow</p>
                &nbsp;
                Us
            </h1>
            <p className='text-center' style={{
                maxWidth:'85%',
                alignContent: 'center',
                fontSize: '16px',
                margin: 'auto'}}>
                新歓練習・イベントに参加希望や相談事のある方は
                X, InstagramのDMからご連絡の方お待ちしております。
            </p>
        </div>
    )
}

function ContactDetails() {
    const media = [
        {title: "東大BESTER新歓2024",
        id: 'X',
        src: XImage,
        url: "https://twitter.com/Bester_2024",
        },
        {title: "東大BESTER新歓2024",
        id: "instagram",
        src: InstaImage,
        url: "https://www.instagram.com/bester_2024",
        },
    ]
    
    const FollowButtons = media.map((item) => 
        <div className='py-2 justify-content-space-around text-align-center'
        key={item.id}
        style={{
            // width: '70%',
            margin: 'auto',
            marginBottom: '10vh',
            alignContent: 'center',
            textAlign: 'center',
        }}>
            <div className='col py-4'>
                <img className='img-fluid' src={item.src} alt='' style={{
                    width: '80px',
                    justifyContent: 'center'
                }}/>
            </div>
            <div className='col py-2'>
                <div className='row'>
                    <b>{item.title}</b>
                </div>
                <div className='row py-2'>
                    <a href={item.url} >
                        <Button variant='secondary' className='justify-content-center'>
                            フォローする
                        </Button>
                    </a>
                </div>
            </div>

        </div>
    )
    return (
        <div>
            <div className='container py-5 justify-content-space-between '
            style={{
                marginTop: '25vh',
                width: '90%'
            }}>
                <div className='text-center' style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    margin: 'auto',
                    marginTop:'20px',
                }}>
                    <div className='row d-flex'>
                        <div className='col-md-5 '
                        style={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            margin: 'auto'
                        }}>
                                <ContactInfo/>
                        </div>
                        <div className='col-md-6 text-center'
                        style={{
                            display: 'flex'
                        }}
                        >
                            {FollowButtons}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactDetails;
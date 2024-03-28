// import React from 'react'
import  InstaImage from './images/symbol/instagram.png'
import  TwitterImage from './images/symbol/twitter.png'
// import  Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Button from '@mui/material/Button';

function ContactInfo() {
    return (
        <div className="container d-flex flex-column justify-content-center text-align-center"
        style={{
            margin: 'auto',
        }}>
            <h1 className='mb-3 d-flex text-uppercase fw-bold justify-content-center' 
            style={{
            }}>
                <p className='text-warning'> Follow</p>
                &nbsp;
                Us
            </h1>
            <p className='text-center' >
                興味を持っていただいてありがとうございます！
                新歓練習・イベントに参加希望の方は
                Twitter, InstagramのDMからご連絡の方お待ちしております。
            </p>
        </div>
    )
}

export default function ContactsDesc() {
    const media = [
        {title: "東大BESTER新歓2024",
        src: TwitterImage,
        url: "https://twitter.com/Bester_2024",
        },
        {title: "東大BESTER新歓2024",
        src: InstaImage,
        url: "https://www.instagram.com/bester_2024",
        },
    ]

    const FollowButtons = media.map((item) => 
        <div className='container py-2 justify-content-space-around text-align-center'
        style={{
            // width: '70%',
            margin: 'auto',
            marginBottom: '10vh',
            alignContent: 'center',
            textAlign: 'center'
          }}>
            <div className='col py-4'>
                <img className='img-fluid' src={item.src} alt='' style={{
                    width: '100px',
                    justifyContent: 'center'
                }}/>
            </div>
            <div className='col py-2'>
                <div className='row'>
                    <b>{item.title}</b>
                </div>
                <div className='row py-2'>
                    <a href={item.url} >
                        <Button variant='contained'  className='justify-content-center text-white variant-light'>
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
                width: '80%'
            }}>
                <div className='row' style={{
                    justifyContent: 'center',
                    margin: 'auto'
                }}>
                    <div className='col-md-5 d-flex flex-column mb-5 mb-lg-2'
                        style={{
                        marginTop: '20px',
                        }}>
                            <ContactInfo/>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center text-align-center'>
                        {FollowButtons}
                    </div>
                </div>
            </div>
        </div>
    )
                    }
import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/symbol/instagram.png'... Remove this comment to see the full error message
import  InstaImage from './images/symbol/instagram.png'
// @ts-expect-error TS(2307): Cannot find module './images/symbol/twitter.png' o... Remove this comment to see the full error message
import  TwitterImage from './images/symbol/twitter.png'
// @ts-expect-error TS(6142): Module './Header' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Header from './Header'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-expect-error TS(6142): Module './Footer' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Footer from './Footer';

function ContactInfo() {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="container d-flex flex-column justify-content-center text-align-center"
        style={{
            margin: 'auto',
        }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h1 className='mb-3 d-flex text-uppercase fw-bold justify-content-center' 
            style={{
            }}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <p className='text-warning'> Follow</p>
                &nbsp;
                Us
            </h1>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className='text-center' >
                興味を持っていただいてありがとうございます！
                新歓練習・イベントに参加希望の方は
                Twitter, InstagramのDMからご連絡の方お待ちしております。
            </p>
            {/* <h3>Opening Hours</h3>
            <p className="m-0">Mon - Fri: 09:00 - 17:00</p>
            <p>Sat - Sun: 10:00 - 15:00</p> */}
        </div>
    )
}

function ContactsDesc() {
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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className='container py-2 justify-content-space-around text-align-center'
        style={{
            // width: '70%',
            margin: 'auto',
            marginBottom: '10vh',
            alignContent: 'center',
            textAlign: 'center'
          }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className='col py-4'>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <img className='img-fluid' src={item.src} alt='' style={{
                    width: '100px',
                    justifyContent: 'center'
                }}/>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className='col py-2'>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className='row'>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <b>{item.title}</b>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className='row py-2'>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <a href={item.url} >
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        <Button variant='secondary' className='justify-content-center'>
                            フォローする
                        </Button>
                    </a>
                </div>
            </div>

        </div>
    )
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className='container py-5 justify-content-space-between '
            style={{
                marginTop: '25vh',
                width: '80%'
            }}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className='row' style={{
                    justifyContent: 'center',
                    margin: 'auto'
                }}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className='col-md-5 d-flex flex-column mb-5 mb-lg-2'
                        style={{
                        marginTop: '20px',
                        }}>
                            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                            <ContactInfo/>
                    </div>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <div className='col-md-6 d-flex justify-content-center text-align-center'>
                        {FollowButtons}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Contacts() {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Header/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ContactsDesc/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Footer/>
        </div>
    )
}

export {Contacts, ContactsDesc}

export default Contacts;
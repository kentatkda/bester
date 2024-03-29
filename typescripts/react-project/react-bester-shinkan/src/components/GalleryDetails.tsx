import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/BBQ.jpg' or i... Remove this comment to see the full error message
import BBQ from './images/gallery/BBQ.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/BBQ2.jpg' or ... Remove this comment to see the full error message
import BBQ2 from './images/gallery/BBQ2.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/tennis2.jpg' ... Remove this comment to see the full error message
import tennis2 from './images/gallery/tennis2.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/tennis3.JPG' ... Remove this comment to see the full error message
import tennis3 from './images/gallery/tennis3.JPG'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/tennis4.jpg' ... Remove this comment to see the full error message
import tennis4 from './images/gallery/tennis4.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/tennis5.jpg' ... Remove this comment to see the full error message
import tennis5 from './images/gallery/tennis5.jpg'
// import tennis1 from './images/gallery_img/tennis1.JPG'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/tennis6.jpg' ... Remove this comment to see the full error message
import tennis6 from './images/gallery/tennis6.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/backimg.jpg' ... Remove this comment to see the full error message
import backimg from './images/gallery/backimg.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/kotose.jpg' o... Remove this comment to see the full error message
import kotose from './images/gallery/kotose.jpg'
// import sun from './images/gallery_img/sun.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/river.jpg' or... Remove this comment to see the full error message
import river from './images/gallery/river.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/oikon.jpg' or... Remove this comment to see the full error message
import oikon from './images/gallery/oikon.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/iwai.jpg' or ... Remove this comment to see the full error message
import iwai from './images/gallery/iwai.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/hanabi.jpg' o... Remove this comment to see the full error message
import hanabi from './images/gallery/hanabi.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/disney.jpg' o... Remove this comment to see the full error message
import disney from './images/gallery/disney.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/band.jpg' or ... Remove this comment to see the full error message
import band from './images/gallery/band.jpg'
// import band2 from './images/gallery_img/band2.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/snow.png' or ... Remove this comment to see the full error message
import snow from './images/gallery/snow.png'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/female.jpg' o... Remove this comment to see the full error message
import female from './images/gallery/female.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/hanabi3.jpg' ... Remove this comment to see the full error message
import hanabi3 from './images/gallery/hanabi3.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/pink.jpg' or ... Remove this comment to see the full error message
import pink from './images/gallery/pink.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/hanabi4.jpg' ... Remove this comment to see the full error message
import hanabi4 from './images/gallery/hanabi4.jpg'

// @ts-expect-error TS(2307): Cannot find module './images/gallery/hanabi1.jpg' ... Remove this comment to see the full error message
import hanabi1 from './images/gallery/hanabi1.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/sleep.jpg' or... Remove this comment to see the full error message
import sleep from './images/gallery/sleep.jpg'

// @ts-expect-error TS(2307): Cannot find module './images/gallery/nagomi.jpg' o... Remove this comment to see the full error message
import nagomi from './images/gallery/nagomi.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/yui.jpg' or i... Remove this comment to see the full error message
import yui from './images/gallery/yui.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/fuji.JPG' or ... Remove this comment to see the full error message
import fuji from './images/gallery/fuji.JPG'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/kotomi.jpg' o... Remove this comment to see the full error message
import kotomi from './images/gallery/kotomi.jpg'


// import { container } from 'react-bootstrap'


const GalleryDetailsHeader = () => {
    return (
        <h1 className='mb-3 d-flex text-uppercase fw-bold text-align-center justify-content-center' 
        style={{
            margin:'auto'
        }}>
            BESTER &nbsp;
            <p className='text-warning'> Gallery</p>
        </h1>
    )
}

export default function GalleryDetails() {
return (
    <div>
    <div className="container py-5"
    style={{
        marginTop: '150px',
    }}>
        <GalleryDetailsHeader/>
        <div className="row"
        style={{width: '80%',
                margin: 'auto',
                justifyContent: 'center',
                alignContent: 'center',
                marginTop: '100px',
                }}>
            <div className="col-md-4 px-2">
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={tennis6} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={river} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ hanabi3 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ iwai } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ BBQ2 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ fuji } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ hanabi1 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={band} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ pink } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
            <div className="col-md-4 px-2">
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ backimg } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ BBQ } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ oikon } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ tennis2 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ hanabi } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ disney } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ tennis5 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ kotomi } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ tennis5 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
            <div className="col-md-4 px-2">
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={female} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ snow } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ hanabi4 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ yui } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ kotose } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ tennis4 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ sleep } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ nagomi } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ tennis3 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
        </div>
        </div>

    </div>
)
}

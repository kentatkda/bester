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
// @ts-expect-error TS(6142): Module './Header' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Header from './Header'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/hanabi1.jpg' ... Remove this comment to see the full error message
import hanabi1 from './images/gallery/hanabi1.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/sleep.jpg' or... Remove this comment to see the full error message
import sleep from './images/gallery/sleep.jpg'
// import naked from './images/gallery/naked.jpg'
// @ts-expect-error TS(6142): Module './Social' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Social from './Social'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/nagomi.jpg' o... Remove this comment to see the full error message
import nagomi from './images/gallery/nagomi.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/yui.jpg' or i... Remove this comment to see the full error message
import yui from './images/gallery/yui.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/fuji.JPG' or ... Remove this comment to see the full error message
import fuji from './images/gallery/fuji.JPG'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/kotomi.jpg' o... Remove this comment to see the full error message
import kotomi from './images/gallery/kotomi.jpg'


// import { container } from 'react-bootstrap'
// @ts-expect-error TS(6142): Module './Footer' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Footer from './Footer'

const GalleryDetailsHeader = () => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h1 className='mb-3 d-flex text-uppercase fw-bold text-align-center justify-content-center' 
        style={{
            margin:'auto'
        }}>
            BESTER &nbsp;
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p className='text-warning'> Gallery</p>
        </h1>
    )
}

export default function GalleryDetails() {
return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Header/>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Social/>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="container py-5"
    style={{
        marginTop: '150px',
    }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <GalleryDetailsHeader/>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="row"
        style={{width: '80%',
                margin: 'auto',
                justifyContent: 'center',
                alignContent: 'center',
                marginTop: '100px',
                }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="col-md-4 px-2">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={tennis6} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={river} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ hanabi3 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ iwai } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ BBQ2 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ fuji } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ hanabi1 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={band} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ pink } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="col-md-4 px-2">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ backimg } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ BBQ } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ oikon } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ tennis2 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ hanabi } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ disney } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ tennis5 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ kotomi } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ tennis5 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="col-md-4 px-2">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={female} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ snow } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ hanabi4 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ yui } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ kotose } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ tennis4 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ sleep } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ nagomi } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ tennis3 } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
        </div>
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Footer style={{width: '100%'}}/>
    </div>
)
}

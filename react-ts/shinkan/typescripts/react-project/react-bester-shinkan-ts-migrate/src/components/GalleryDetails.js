import React from 'react'
import BBQ from './images/gallery/BBQ.jpg'
import BBQ2 from './images/gallery/BBQ2.jpg'
import tennis2 from './images/gallery/tennis2.jpg'
import tennis3 from './images/gallery/tennis3.JPG'
import tennis4 from './images/gallery/tennis4.jpg'
import tennis5 from './images/gallery/tennis5.jpg'
// import tennis1 from './images/gallery_img/tennis1.JPG'
import tennis6 from './images/gallery/tennis6.jpg'
import backimg from './images/gallery/backimg.jpg'
import kotose from './images/gallery/kotose.jpg'
// import sun from './images/gallery_img/sun.jpg'
import river from './images/gallery/river.jpg'
import oikon from './images/gallery/oikon.jpg'
import iwai from './images/gallery/iwai.jpg'
import hanabi from './images/gallery/hanabi.jpg'
import disney from './images/gallery/disney.jpg'
import band from './images/gallery/band.jpg'
// import band2 from './images/gallery_img/band2.jpg'
import snow from './images/gallery/snow.png'
import female from './images/gallery/female.jpg'
import hanabi3 from './images/gallery/hanabi3.jpg'
import pink from './images/gallery/pink.jpg'
import hanabi4 from './images/gallery/hanabi4.jpg'
import Header from './Header'
import hanabi1 from './images/gallery/hanabi1.jpg'
import sleep from './images/gallery/sleep.jpg'
// import naked from './images/gallery/naked.jpg'
import Social from './Social'
import nagomi from './images/gallery/nagomi.jpg'
import yui from './images/gallery/yui.jpg'
import fuji from './images/gallery/fuji.JPG'
import kotomi from './images/gallery/kotomi.jpg'


// import { container } from 'react-bootstrap'
import Footer from './Footer'

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
        <Header/>
        <Social/>
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
        <Footer style={{width: '100%'}}/>
    </div>
)
}

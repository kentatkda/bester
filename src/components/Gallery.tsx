import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/BBQ.jpg' or i... Remove this comment to see the full error message
import BBQ from './images/gallery/BBQ.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/BBQ2.jpg' or ... Remove this comment to see the full error message
import BBQ2 from './images/gallery/BBQ2.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/kotomi.jpg' o... Remove this comment to see the full error message
import kotomi from './images/gallery/kotomi.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/backimg.jpg' ... Remove this comment to see the full error message
import backimg from './images/gallery/backimg.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/female.jpg' o... Remove this comment to see the full error message
import female from './images/gallery/female.jpg'
// @ts-expect-error TS(2307): Cannot find module './images/gallery/hanabi.jpg' o... Remove this comment to see the full error message
import hanabi from './images/gallery/hanabi.jpg'

import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
// import { container } from 'react-bootstrap'

export default function Gallery() {
  return (
    <div className="container py-5"
    style={{
    marginTop: '150px',
    }}>
        <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold z-index-100 "> <b>Gallery</b></h2>
        <div className="row"
        style={{
                width: '85%',
                margin: 'auto',
                justifyContent: 'center',
                alignContent: 'center',
                marginTop: '100px',
                }}>
            <div className="col-md-4 px-2 ">
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={kotomi} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={BBQ2} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
            <div className="col-md-4 px-2">
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ backimg } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ BBQ } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
            <div className="col-md-4 px-2">
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ hanabi } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={female} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
        </div>
        <div className='text-center fs-1 mb-5 text-uppercase fw-bold z-index-10'
        style={{marginTop: '50px'}}>
            <Link to='/bester/gallery'>
                <Button variant="warning">
                    詳しく見る →
                </Button>
            </Link>
        </div>
    </div>
)
}

import React from 'react'
import BBQ from './images/gallery/BBQ.jpg'
import BBQ2 from './images/gallery/BBQ2.jpg'
import kotomi from './images/gallery/kotomi.jpg'
import backimg from './images/gallery/backimg.jpg'
import female from './images/gallery/female.jpg'
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
            <div className="col-sm-4 col-xs-3 px-2 ">
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={kotomi} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={BBQ2} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
            <div className="col-sm-4 col-xs-3 px-2">
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ backimg } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    <img src={ BBQ } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
            <div className="col-sm-4 col-xs-3 px-2">
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
            <Link to='/gallery'>
                <Button variant="warning">
                    View More →
                </Button>
            </Link>
        </div>
    </div>
  )
}

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
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="container py-5"
      style={{
        marginTop: '150px',
      }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold z-index-100 "> <b>Gallery</b></h2>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="row"
          style={{
                width: '85%',
                margin: 'auto',
                justifyContent: 'center',
                alignContent: 'center',
                marginTop: '100px',
                }}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="col-sm-4 col-xs-3 px-2 ">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={kotomi} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={BBQ2} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="col-sm-4 col-xs-3 px-2">
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
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className="col-sm-4 col-xs-3 px-2">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={ hanabi } className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="my-3 border border-4 border-dark" style={{overflow:'hidden'}}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={female} className="img-fluid" alt="" style={{objectFit: 'cover'}}/>
                </div>
            </div>
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className='text-center fs-1 mb-5 text-uppercase fw-bold z-index-10'
        style={{marginTop: '50px'}}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Link to='/gallery'>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Button variant="warning">
                    View More →
                </Button>
            </Link>
        </div>
    </div>
  )
}

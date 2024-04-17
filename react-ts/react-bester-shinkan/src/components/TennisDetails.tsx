import React from 'react'
// @ts-expect-error TS(6142): Module './Header' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Header from './Header'
// @ts-expect-error TS(6142): Module './Footer' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Footer from './Footer'
// @ts-expect-error TS(6142): Module './Social' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Social from './Social'

function TennisDetails() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header/>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Social/>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className='container' style=
      {{
        marginTop: '30vh',
        marginBottom: '20vh'
      }}>
        TennisDetails
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Footer/>
    </div>
  )
}

export default TennisDetails

import React from 'react'
// @ts-expect-error TS(6142): Module './Header' was resolved to 'C:/Users/MEIP-u... Remove this comment to see the full error message
import Header from './Header'

function BesterDetails() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header/>
      BESTER
    </div>
  )
}

export default BesterDetails

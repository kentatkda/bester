import React from 'react'
// import FacebookImage from './images/symbol/facebook.png'
// @ts-expect-error TS(2307): Cannot find module './images/symbol/twitter.png' o... Remove this comment to see the full error message
import TwitterImage from './images/symbol/twitter.png'
// @ts-expect-error TS(2307): Cannot find module './images/symbol/instagram.png'... Remove this comment to see the full error message
import InstagramImage from './images/symbol/instagram.png'

function Social() {


  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ul class="social">
        {/* <li>
          <a href="https://twitter.com/Bester_2024">
            <img src={FacebookImage} alt=""/>
          </a>
        </li> */}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <li>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <a href="https://twitter.com/Bester_2024">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <img src={TwitterImage} alt=""/>
          </a>
        </li>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <li>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <a href="https://www.instagram.com/bester_2024">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <img src={InstagramImage} alt=""/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social

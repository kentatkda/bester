import React from 'react'
// import FacebookImage from './images/symbol/facebook.png'
// @ts-expect-error TS(2307): Cannot find module './images/symbol/twitter.png' o... Remove this comment to see the full error message
import TwitterImage from './images/symbol/twitter.png'
// @ts-expect-error TS(2307): Cannot find module './images/symbol/instagram.png'... Remove this comment to see the full error message
import InstagramImage from './images/symbol/instagram.png'

function Social() {


  return (
    <div>
      <ul className="social">
        <li>
          <a href="https://twitter.com/Bester_2024">
            <img src={TwitterImage} alt="" style={{zIndex: '100'}}/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/bester_2024">
            <img src={InstagramImage} alt="" style={{zIndex: '100'}}/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social

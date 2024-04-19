import React from 'react'
// @ts-expect-error TS(2307): Cannot find module './images/symbol/insta_logo.png'... Remove this comment to see the full error message
import  InstagramImage from './images/symbol/insta_logo.png'
// @ts-expect-error TS(2307): Cannot find module './images/symbol/x_logo.png' o... Remove this comment to see the full error message
import XImage from './images/symbol/x_logo_white.png'
function Social() {


  return (
    <div>
      <ul className="social">
        <li>
          <a href="https://twitter.com/Bester_2024">
            <img src={XImage} alt="" style={{
              zIndex: '99',
              width:'30px',
              backgroundColor:'black',
              border: "none",
              borderRadius: "8px",
              padding: '5px',
              }}/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/bester_2024">
            <img src={InstagramImage} alt="" style={{
              zIndex: '99', 
              width:'30px'}}/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social

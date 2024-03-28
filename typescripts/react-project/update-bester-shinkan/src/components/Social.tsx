import React from 'react'
// import FacebookImage from './images/symbol/facebook.png'
import TwitterImage from './images/symbol/twitter.png'
import InstagramImage from './images/symbol/instagram.png'

function Social() {


  return (
    <div>
      <ul key='social'>
        <li>
          <a href="https://twitter.com/Bester_2024">
            <img src={TwitterImage} alt=""/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/bester_2024">
            <img src={InstagramImage} alt=""/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social

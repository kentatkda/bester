import React from 'react'
import  {Link} from "react-router-dom"

const Header = () =>  {
  return (
    <header>
      <div className='logo'>
        <h3> 東大BESTER</h3>
      </div>

      <nav>
        <ul>
            <li>
                <Link to="/">ホーム</Link>
            </li>
            <li>
                <Link to="/blog">ブログ</Link>
            </li>
            <li>
                <Link to="/SNS">SNS</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header

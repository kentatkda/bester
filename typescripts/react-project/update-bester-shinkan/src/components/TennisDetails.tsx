import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Social from './Social'

function TennisDetails() {
  return (
    <div>
      <Header/>
      <Social/>
      <div className='container' style=
      {{
        marginTop: '30vh',
        marginBottom: '20vh'
      }}>
        TennisDetails
      </div>
      <Footer/>
    </div>
  )
}

export default TennisDetails

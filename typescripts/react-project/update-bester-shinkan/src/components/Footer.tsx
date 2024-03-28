import React from 'react'

function Footer() {
  return (
    <div className='shadow-lg'
    style={{
      marginTop: '30vh',
      color: 'black',
      width: '100%',
      marginBottom: '0',
      paddingTop: '50px',
      lineHeight: '0.6',
      height: '200px',
      // backgroundColor: 'rgba(0,0,0,0.1)',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
        <h2><b className='text-warning mb-30'
        style={{
          fontWeight: '500',
          marginBottom: '20px',
        }}>BESTER</b></h2>
        <h6 style={{
          paddingTop: '0',
          margin: '0',
          // fontsize: '10px',
        }}> Inter-College Tennis Circle of Tokyo Univ / Japan Women Univ / OChanomizu Univ. </h6>
        <h6 style={{
          marginBottom: '0',
          // fontsize: '10px',
        }}> © 2024 Beseter. All rights reserved. </h6>
    </div>
  )
}

export default Footer

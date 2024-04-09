import React from 'react'
import Header from '../components/Header.tsx'
import Social from '../components/Social.tsx'
import Footer from '../components/Footer.tsx'
import ShinkanDetails from '../components/ShinkanDetails.tsx'
import ModalComponent from '../components/ModalComponent.tsx'

function Shinkan() {
  return (
    <div>
        <Header/>
        <Social/>
        <ShinkanDetails/>
        <div className='text-center justify-content-center' style={{
          justifyContent: 'center',
          alignContent: 'center',
          margin: 'auto'
        }}>
          <ModalComponent/>
        </div>
        <Footer/>
    </div>
  )
}

export default Shinkan

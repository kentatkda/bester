import React from 'react'
import Header from '../components/Header.tsx'
import EventsDetails from '../components/EventsDetails.tsx'
import Footer from '../components/Footer.tsx'
import Social from '../components/Social.tsx'

function Events() {
  return (
    <div>
        <Header/>
        <Social/>
        <EventsDetails/>
        <Footer/>
    </div>
  )
}

export default Events

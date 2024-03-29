import React from 'react'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import AboutBester from '../components/AboutBester.tsx'
import Events from '../components/Events.tsx'
import Gallery from '../components/Gallery.tsx'
import JoinUs from '../components/JoinUs.tsx'
import PageCover from '../components/PageCover.tsx'
import Social from '../components/Social.tsx'
import Tennis from '../components/Tennis.tsx'
import CharmPoints from '../components/CharmPoints.tsx'
import ContactDetails from '../components/Contacts.tsx'

function Home() {
  return (
    <div>
        <Header/>
        <Social/>
        <PageCover/>
        <AboutBester/>
        <CharmPoints/>
        <Tennis/>
        <Gallery/>
        <Events/>
        <JoinUs/>
        <ContactDetails/>
        <Footer/>
    </div>
  )
}

export default Home

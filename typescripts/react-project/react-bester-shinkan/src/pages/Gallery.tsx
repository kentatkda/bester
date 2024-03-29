import React from 'react'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import Social from '../components/Social.tsx'
import GalleryDetails from '../components/GalleryDetails.tsx'


function Gallery() {
  return (
    <div>
        <Header/>
        <Social/>
        <GalleryDetails/>
        <Footer/>
    </div>
  )
}

export default Gallery

import React from 'react'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import Social from '../components/Social.tsx'
import GalleryDetails from '../components/GalleryDetails.tsx'
// import { ScrollRestoration } from 'react-router-dom'
import { motion } from 'framer-motion'
import ContainerVariants from '../components/ContainerVariants.tsx'

function Gallery() {
  return (
    <div>
        {/* <ScrollRestoration/> */}
        <motion.div
        className="gallery"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}>
          <Header/>
          <Social/>
        </motion.div>
        <GalleryDetails/>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible">
          <Footer/>
        </motion.div>
    </div>
  )
}

export default Gallery

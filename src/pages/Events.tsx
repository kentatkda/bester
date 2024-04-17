import React from 'react'
import Header from '../components/Header.tsx'
import EventsDetails from '../components/EventsDetails.tsx'
import Footer from '../components/Footer.tsx'
import Social from '../components/Social.tsx'
import { motion } from 'framer-motion'
import ContainerVariants from '../components/ContainerVariants.tsx'

function Events() {
  return (
    <motion.div
      className="events"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}>
        <Header/>
        <Social/>
        <EventsDetails/>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible">
          <Footer/>
        </motion.div>
    </motion.div>
  )
}

export default Events

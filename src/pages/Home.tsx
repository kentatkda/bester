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
import ShowLogo from '../components/ShowLogo.tsx'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContainerVariants from '../components/ContainerVariants.tsx'



export const Home = () => {
  const [showLogo, setShowLogo] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Home">
      {showLogo ? <ShowLogo /> : <HomeComponent />}
    </div>
  )
}

function HomeComponent() {
  return (
    <div>
      <motion.div
      className="home"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}>
        <Header/>
        <Social/>
        <PageCover/>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible"
        >
          <AboutBester/>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible">
          <CharmPoints/>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible">
          <Tennis/>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible">
          <Gallery/>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible">
          <Events/>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible">
          <JoinUs/>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible">
          <ContactDetails/>
        </motion.div>
        <motion.div
        variants={ContainerVariants()}
        initial="hidden"
        whileInView="visible">
          <Footer/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home

import React from 'react'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import Social from '../components/Social.tsx'
import ContactDetails from '../components/Contacts.tsx'
import { motion } from 'framer-motion';
import ContainerVariants from '../components/ContainerVariants.tsx'

function Contact() {
  return (
    <div>
      <motion.div
      className="home"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}>
        <Header/>
        <Social/>
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

    </div>
  )
}

export default Contact

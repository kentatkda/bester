import React from 'react'
import Header from '../components/Header.tsx'
import Social from '../components/Social.tsx'
import Footer from '../components/Footer.tsx'
import ShinkanDetails from '../components/ShinkanDetails.tsx'
import ModalComponent from '../components/ModalComponent.tsx'
import { motion } from 'framer-motion';
import ContainerVariants from '../components/ContainerVariants.tsx'

function Shinkan() {
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
      <ShinkanDetails/>
      <motion.div
      variants={ContainerVariants()}
      initial="hidden"
      whileInView="visible">
        <div className='text-center justify-content-center' style={{
          justifyContent: 'center',
          alignContent: 'center',
          margin: 'auto'
        }}>
          <ModalComponent/>
        </div>
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

export default Shinkan

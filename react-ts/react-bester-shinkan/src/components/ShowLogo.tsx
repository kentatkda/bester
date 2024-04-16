import React from 'react'
// import { motion } from "framer-motion";
// import BesterLogo from './images/symbol/bester_logo.png'
function ShowLogo() {
  return (
    <div className='justify-content-space-around align-items-center' 
    style={{
        position: 'fixed',
        margin: 'auto',
        marginTop: '45vh',
        textAlign: 'center',
        width: '100%',
        height: '100px',
        top:'calc(10% - 50px/2)'

    }}>
      <div className='logo-animation'>
      {/* <motion.div
        className="figure2"
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: 0, x: 0 }}
        transition={{ duration: 6 }}>
        <img src={BesterLogo} alt=""/>
      </motion.div> */}
        <div className='letter text-warning fw-bold'>B</div>
        <div className='letter text-warning fw-bold'>E</div>
        <div className='letter text-warning fw-bold'>S</div>
        <div className='letter text-warning fw-bold'>T</div>
        <div className='letter text-warning fw-bold'>E</div>
        <div className='letter text-warning fw-bold'>R</div>
      </div>

    </div>
  )
}

export default ShowLogo

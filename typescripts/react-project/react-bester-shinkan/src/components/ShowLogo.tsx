import React from 'react'
// import { motion } from "framer-motion";

function ShowLogo() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <h2 className='text-warning' >Welcome to BESTER. </h2>
      {/* <motion.div
        className="figure2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}>
        4
      </motion.div> */}
    </div>
  )
}

export default ShowLogo

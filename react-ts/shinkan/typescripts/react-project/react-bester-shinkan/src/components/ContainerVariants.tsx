// import React from 'react'

const ContainerVariants = () =>{ 
    return (
    {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
    })
};

export default ContainerVariants;
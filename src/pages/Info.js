import React from 'react'
//framer motion library
import {motion} from 'framer-motion';


export const Info = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      Info
    </motion.div>
  )
}

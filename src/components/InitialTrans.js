import React from 'react'
import { motion } from 'framer-motion'

const blackBox = {
  initial: {
    height: '100vh',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const logo = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0,
    transition: {
      duration: 3,
    },
  },
}

function InitialTrans() {
  return (
    <div className="page-transition">
      <motion.div
        className="sub-page"
        initial="initial"
        animate="animate"
        variants={blackBox}
      >
        <motion.div
          variants={logo}
          initial="hidden"
          animate="visible"
          className="logo-wrapper"
        >
          <motion.svg
            className="icone-sidouxie"
            data-name="icone-sidouxie"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96.15 43.61"
            variants={logo}
            initial="hidden"
            animate="visible"
          >
            <polygon points="96.14 0 70.61 20.68 61.85 13.72 96.14 0" />
            <polygon points="79.11 43.61 0.5 43.61 56.24 18.99 70.36 23.94 79.11 43.61" />
            <polygon points="13.12 31.61 0 42.27 9.27 3.77 13.12 31.61" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default InitialTrans

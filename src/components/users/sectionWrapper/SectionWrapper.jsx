import React from 'react'
import { motion } from 'framer-motion'

export default function SectionWrapper({ children }) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

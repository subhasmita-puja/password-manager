"use client"

import { useTheme } from "../context/ThemeContext"
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const { mounted } = useTheme()

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-pattern">
      <Navbar />
      <motion.main
        className="flex-grow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}

export default Layout
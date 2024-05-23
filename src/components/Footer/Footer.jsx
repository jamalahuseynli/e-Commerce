import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='py-3 text-center'>
        <p className='text-white mb-0'>Copyright {new Date().getFullYear()}. All rights reserved</p>
    </footer>
  )
}

export default Footer
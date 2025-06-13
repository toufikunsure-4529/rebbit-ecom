import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t py-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
        {/* Left - Logo */}
        <div>
          <Link to="/" className='text-2xl font-medium'>
            Rebbit
          </Link>
          <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
          <p className='text-gray-500 mb-4'>Webart Technology produces uniquely creative and innovative design and flawless and bug free coding which ensures seamless execution and high performance.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
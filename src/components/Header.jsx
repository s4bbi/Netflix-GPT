import React from 'react'
import netflix from "../assets/netflix-logo.webp"

const Header = () => {
  return (
    <div className='flex w-full px-6 py-6 sm:py-4 absolute z-20 md:px-40'>
        <img src={netflix} className='w-24 sm:w-40' alt="Netflix Logo" />
    </div>
  )
}

export default Header
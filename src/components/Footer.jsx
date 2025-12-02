import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gray-800 py-20'>
        <div className='flex justify-evenly gap-20'>
            <div>
                <img src={assets.logo} alt="" />
                <p className='text-gray-400'>Connecting students with real-world opportunities</p>
            </div>
            <div>
                <h2 className='text-xl font-bold mb-3 text-white'>For Students</h2>
                <p className='text-gray-400'>Browse Products</p>
                <p className='text-gray-400'>How It Works</p>
                <p className='text-gray-400'>Success Stories</p>
            </div>
            <div>
                <h2 className='text-xl font-bold mb-3 text-white' >For Owners</h2>
                <p className='text-gray-400'>Post a Project</p>
                <p className='text-gray-400'>Pricing</p>
                <p className='text-gray-400'>Find Talent</p>
            </div>
            <div>
                <h2 className='text-xl font-bold mb-3 text-white' >Company</h2>
                <p className='text-gray-400'>About Us</p>
                <p className='text-gray-400'>Contact</p>
                <p className='text-gray-400'>Pricing</p>
            </div>
        </div>
        <div className='flex justify-center'>
            <hr className='border-gray-600 my-10 w-5/6'/>
        </div>
        <p className='text-center text-gray-400'>© 2025 StudentFreelance. All rights reserved.</p>
    </div>
  )
}

export default Footer
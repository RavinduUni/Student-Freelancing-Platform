import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <div className='border-b border-border py-4'>
      <div className='container px-20 flex justify-between items-center'>
        <img onClick={() => navigate('/')} src={assets.logo} alt="Insider Jobs" className='cursor-pointer' />
        <div className='flex gap-6 mr-100'>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/">Companies</NavLink>
          <NavLink to="/">Pricing</NavLink>
          <NavLink to="/">About</NavLink>
        </div>
        <div>
          <button onClick={() => navigate('/auth?type=recruiter&mode=login')} className='mx-2  rounded-3xl py-2 px-5 text-blue-600'>Recruiter Login</button>
          <button onClick={() => navigate('/auth?type=student&mode=login')} className='mx-2 border border-blue-600 rounded-2xl py-3 px-5 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-500'>Student Login</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar 
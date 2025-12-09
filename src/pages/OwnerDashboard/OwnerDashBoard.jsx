import React from 'react'
import NavBar from '../../components/NavBar'
import { Outlet } from 'react-router-dom'

const OwnerDashBoard = () => {
  return (
    <div className='min-h-screen'>
        <NavBar />

        <div className='container px-20 mx-auto flex'>
            <div className='flex-1 bg-white border-x border-border px-4 py-6 min-h-screen'>

            </div>

            <div className='flex-3 min-h-screen bg-background py-6 px-4'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default OwnerDashBoard
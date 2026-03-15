import { Briefcase } from 'lucide-react'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Insider<span className="text-blue-600">jobs</span></span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/">Companies</NavLink>
                    <NavLink to="/">Pricing</NavLink>
                    <NavLink to="/">About</NavLink>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate('/auth?type=recruiter&mode=login')} className="text-sm px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">Recruiter Login</button>
                    <button onClick={() => navigate('/auth?type=student&mode=login')} className="text-sm px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium cursor-pointer">Student Login</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar2
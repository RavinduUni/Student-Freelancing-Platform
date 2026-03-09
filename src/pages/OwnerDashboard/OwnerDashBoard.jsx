import React from 'react'
import NavBar from '../../components/NavBar'
import { NavLink, Outlet } from 'react-router-dom'
import { Briefcase, LayoutDashboard, PlusCircle, Settings, Shield, Users, Wallet } from 'lucide-react';

const OwnerDashBoard = () => {

    const ownerMenu = [
        { id: 'owner-dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'projects', label: 'My Projects', icon: Briefcase },
        { id: 'create', label: 'Create Project', icon: PlusCircle },
        { id: 'all-applicants', label: 'All Applicants', icon: Users },
        { id: 'owner-nda', label: 'NDA Management', icon: Shield },
        { id: 'payments', label: 'Payments', icon: Wallet },
        { id: 'owner-settings', label: 'Settings', icon: Settings }
    ];

    return (
        <div className='min-h-screen'>
            <NavBar />

            <div className='container px-20 mx-auto flex bg-background'>

                {/* Left side Pannel */}
                <div className='flex-1 bg-white shadow border-x border-border px-4 py-6 min-h-screen'>
                    <ul className='flex flex-col gap-2'>
                        <NavLink
                            to=""
                            end
                            className={({ isActive }) =>
                                [
                                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                                ].join(" ")
                            }
                        >
                            <LayoutDashboard className='w-5 h-5' />
                            <span>DashBoard</span>
                        </NavLink>

                        <NavLink
                            to="projects"
                            className={({ isActive }) =>
                                [
                                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                                ].join(" ")
                            }
                        >
                            <Briefcase className='w-5 h-5' />
                            <span>Projects</span>
                        </NavLink>

                        <NavLink
                            to="create-project"
                            className={({ isActive }) =>
                                [
                                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                                ].join(" ")
                            }
                        >
                            <PlusCircle className='w-5 h-5' />
                            <span>Create Project</span>
                        </NavLink>

                        <NavLink
                            to="all-applicants"
                            className={({ isActive }) =>
                                [
                                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                                ].join(" ")
                            }
                        >
                            <Users className='w-5 h-5' />
                            <span>All Applicants</span>
                        </NavLink>

                        <NavLink
                            to="owner-nda"
                            className={({ isActive }) =>
                                [
                                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                                ].join(" ")
                            }
                        >
                            <Shield className='w-5 h-5' />
                            <span>NDA Management</span>
                        </NavLink>

                        <NavLink
                            to="payments"
                            className={({ isActive }) =>
                                [
                                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                                ].join(" ")
                            }
                        >
                            <Wallet className='w-5 h-5' />
                            <span>Payments</span>
                        </NavLink>

                        <NavLink
                            to="owner-settings"
                            className={({ isActive }) =>
                                [
                                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                                ].join(" ")
                            }
                        >
                            <Settings className='w-5 h-5' />
                            <span>Settings</span>
                        </NavLink>
                    </ul>
                </div>


                {/* Right side Pannel */}
                <div className='flex-4 min-h-screen bg-background py-6 px-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default OwnerDashBoard
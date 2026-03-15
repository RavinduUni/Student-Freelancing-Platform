import React from 'react'
import NavBar from '../../components/NavBar'
import { NavLink, Outlet } from 'react-router-dom'
import { Briefcase, File, FileText, LayoutDashboard, Settings, Shield, UploadIcon, Wallet } from 'lucide-react'

const StudentDashBoard = () => {
  return (
    <div className='min-h-screen'>
      {/* Navbar for studentDashBoard */}
      <NavBar />

      <div className='container px-20 mx-auto flex bg-background'>
        {/* left side pannel */}
        <div className='flex-1 bg-white border-x border-border px-4 py-6 min-h-screen'>
          <div>
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
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </NavLink>

              <NavLink
                to="browse-projects"
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                  ].join(" ")
                }
              >
                <Briefcase className="w-5 h-5" />
                <span>Browse Projects</span>
              </NavLink>

              <NavLink
                to="applied-projects"
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                  ].join(" ")
                }
              >
                <FileText className="w-5 h-5" />
                <span>Applied Projects</span>
              </NavLink>

              <NavLink
                to="nda-requests"
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                  ].join(" ")
                }
              >
                <Shield className="w-5 h-5" />
                <span>NDA Requests</span>
              </NavLink>

              <NavLink
                to="submissions"
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                  ].join(" ")
                }
              >
                <UploadIcon className="w-5 h-5" />
                <span>Submissions</span>
              </NavLink>

              <NavLink
                to="resumebuilder"
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                  ].join(" ")
                }
              >
                <File className="w-5 h-5" />
                <span>Resume Builder</span>
              </NavLink>

              <NavLink
                to="wallet"
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                  ].join(" ")
                }
              >
                <Wallet className="w-5 h-5" />
                <span>Wallet</span>
              </NavLink>

              <NavLink
                to="settings"
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 hover:bg-gray-100 py-3 px-2 rounded-2xl",
                    isActive ? "text-primary bg-blue-50" : "text-text-secondary"
                  ].join(" ")
                }
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </NavLink>


            </ul>
          </div>
        </div>

        {/* right side pannel */}
        <div className='flex-4 min-h-screen bg-background py-6 px-4'>
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default StudentDashBoard
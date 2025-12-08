import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Applications from './pages/Applications'
import ProjectDetail from './pages/ProjectDetail'
import AuthPage from './pages/AuthPage'
import StudentDashBoard from './pages/StudentDashboard/StudentDashBoard'
import DashBoard from './pages/StudentDashboard/DashBoard'
import BrowseProjects from './pages/StudentDashboard/BrowseProjects'
import AppliedProjects from './pages/StudentDashboard/AppliedProjects'
import NDARequests from './pages/StudentDashboard/NDARequests'
import Submissions from './pages/StudentDashboard/Submissions'
import Wallet from './pages/StudentDashboard/Wallet'
import Settings from './pages/StudentDashboard/Settings'
import Aos from 'aos'
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 800,        // animation duration (ms)
      once: true,           // animate only once
      easing: "ease-in-out" // smooth animation
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/apply-project/:id' element={<ProjectDetail />} />
        <Route path='/applications' element={<Applications />} />
        
        <Route path="/student-dashboard" element={<StudentDashBoard />}>

          <Route index element={<DashBoard />} />

          <Route path="browse-projects" element={<BrowseProjects />} />
          <Route path="applied-projects" element={<AppliedProjects />} />
          <Route path="nda-requests" element={<NDARequests />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>
    </div>
  )
}

export default App
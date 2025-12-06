import React, { useEffect, useState } from 'react'
import StatusBadge from '../../components/StatusBadge';
import { Clock, Cross, CrossIcon, DollarSign, Eye, FileText, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AppliedProjects = () => {

  const navigate = useNavigate();

  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const appliedProjects = [
    {
      id: 1,
      title: 'Mobile App UI Design',
      company: 'TechStart Inc',
      budget: 500,
      status: 'nda-sent',
      appliedDate: '2024-11-15',
      deadline: '2024-12-20',
      category: 'UI/UX Design',
      description: 'Design a modern mobile app interface for a fitness tracking application.',
      skills: ['Figma', 'UI/UX', 'Mobile Design']
    },
    {
      id: 2,
      title: 'E-commerce Website Development',
      company: 'ShopEasy LLC',
      budget: 1200,
      status: 'in-progress',
      appliedDate: '2024-11-10',
      deadline: '2024-12-30',
      category: 'Web Development',
      description: 'Build a fully functional e-commerce website with payment integration.',
      skills: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 3,
      title: 'Logo Design for Startup',
      company: 'InnovateCo',
      budget: 300,
      status: 'applied',
      appliedDate: '2024-11-08',
      deadline: '2024-12-15',
      category: 'Graphic Design',
      description: 'Create a modern and memorable logo for a tech startup.',
      skills: ['Illustrator', 'Photoshop', 'Branding']
    },
    {
      id: 4,
      title: 'Content Writing - Tech Blog',
      company: 'TechInsights',
      budget: 200,
      status: 'applied',
      appliedDate: '2024-11-12',
      deadline: '2024-12-10',
      category: 'Content Writing',
      description: 'Write 5 blog posts about emerging technologies.',
      skills: ['Writing', 'SEO', 'Research']
    },
    {
      id: 5,
      title: 'React Dashboard Development',
      company: 'DataViz Corp',
      budget: 800,
      status: 'nda-accepted',
      appliedDate: '2024-11-05',
      deadline: '2024-12-25',
      category: 'Web Development',
      description: 'Build an analytics dashboard with data visualization.',
      skills: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS']
    },
    {
      id: 6,
      title: 'Video Editing - Product Demo',
      company: 'MediaPro',
      budget: 400,
      status: 'completed',
      appliedDate: '2024-10-20',
      deadline: '2024-11-15',
      category: 'Video Editing',
      description: 'Edit a 3-minute product demonstration video.',
      skills: ['Premiere Pro', 'After Effects']
    }
  ];

  const statusFilters = [
    { value: 'all', label: 'All Applications', count: appliedProjects.length },
    { value: 'applied', label: 'Under Review', count: appliedProjects.filter(p => p.status === 'applied').length },
    { value: 'nda-sent', label: 'NDA Sent', count: appliedProjects.filter(p => p.status === 'nda-sent').length },
    { value: 'nda-accepted', label: 'NDA Accepted', count: appliedProjects.filter(p => p.status === 'nda-accepted').length },
    { value: 'in-progress', label: 'In Progress', count: appliedProjects.filter(p => p.status === 'in-progress').length },
    { value: 'completed', label: 'Completed', count: appliedProjects.filter(p => p.status === 'completed').length }
  ];

  const filteredProjects = filterStatus === 'all'
    ? appliedProjects
    : appliedProjects.filter(p => p.status === filterStatus);

  const closeModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setSelectedProject(null);
      setShowModel(false);
    }, 300);
  };

  return (
    <div className='min-h-screen bg-background'>
      <div>
        <h1 className='text-4xl font-bold mb-2'>My Applications</h1>
        <p className='text-text-secondary'>Track all your project applications and their current status</p>
      </div>

      <div className='mt-6'>
        <div className='flex items-center gap-4'>
          {statusFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setFilterStatus(filter.value)}
              className={`border border-gray-300 rounded-2xl px-3 py-2 ${filterStatus === filter.value ? 'bg-primary text-white' : 'bg-white'}`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Applications Grid */}
      <div className='mt-10'>
        <div className='grid grid-cols-1 gap-5'>
          {filteredProjects.map((project) => (
            <div className='bg-white shadow p-6 rounded-xl' key={project.id}>
              <div className='flex gap-5 items-center mb-2'>
                <h1 className='text-2xl font-semibold'>{project.title}</h1>
                <StatusBadge status={project.status} />
              </div>
              <p className='text-text-secondary mb-2'>{project.company}</p>
              <div className='flex items-center gap-3 text-text-secondary mb-3'>
                <span className='flex items-center gap-2'>
                  <FileText className='w-4 h-4' />
                  {project.category}
                </span>
                <span className='flex items-center gap-2'>
                  <DollarSign className='w-4 h-4' />
                  ${project.budget}
                </span>
                <span className='flex items-center gap-2'>
                  <Clock className='w-4 h-4' />
                  Due: {new Date(project.deadline).toLocaleDateString()}
                </span>
              </div>
              <div className='flex items-center gap-4 mb-3'>
                {project.skills.map((skill, index) => (
                  <span className='flex items-center gap-2 bg-blue-50 text-primary px-4 py-1 rounded-xl' key={index}>
                    {skill}
                  </span>
                ))}
              </div>
              <p className='text-text-secondary mb-3'>Applied on {new Date(project.appliedDate).toLocaleDateString()}</p>
              <hr className='border-border mb-4' />
              <div className='flex items-center gap-5'>
                <button
                  className='flex items-center gap-2 text-primary border-2 border-primary rounded-xl px-4 py-2 hover:bg-primary hover:text-white transition-colors duration-300'
                  onClick={() => { setSelectedProject(project); setShowModel(true); setTimeout(() => setAnimateModal(true), 10); }}
                >
                  <Eye className='w-4 h-4' />
                  View Details
                </button>
                <button
                  onClick={() => navigate('/student-dashboard/nda-requests')}
                  className='flex items-center gap-2 text-white bg-primary border-2 border-primary rounded-xl px-4 py-2 hover:bg-blue-600 transition-colors duration-300'
                >
                  <FileText className='w-4 h-4' />
                  Review NDA
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Model */}
      {selectedProject && showModel && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          {/* BACKDROP */}
          <div className='absolute inset-0 bg-black opacity-70 transition-opacity duration-300' onClick={closeModal} />
          {/* MODAL */}
          <div className={`
              relative p-5 bg-white rounded-xl w-full max-w-3xl transform transition-all duration-200
              ${animateModal ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}
          `}>
            <div className='flex justify-between items-center'>
              <h1 className='text-3xl font-semibold'>Project Details</h1>
              <X className='cursor-pointer' onClick={closeModal} />
            </div>
            <hr className='border-border my-3' />
            <div className='flex gap-4 items-center'>
              <h1 className='text-2xl font-semibold'>{selectedProject.title}</h1>
              <StatusBadge status={selectedProject.status} />
            </div>
            <p className='text-text-secondary mt-2'>{selectedProject.company}</p>
            <p className='text-text-secondary mt-2'>{selectedProject.category}</p>
            <hr className='border-border my-3' />
            <h3 className='text-lg font-semibold'>Description</h3>
            <p className='text-text-secondary my-3'>{selectedProject.description}</p>
            <div className='grid grid-cols-2 gap-5 mt-6'>
              <div className='p-4 bg-blue-50 rounded-lg'>
                <p className='text-text-secondary mb-1' >Budget</p>
                <p className='flex items-center'><DollarSign className='w-4 h-4' />{selectedProject.budget}</p>
              </div>
              <div className='p-4 bg-green-50 rounded-lg'>
                <p className='text-text-secondary mb-1'>Deadline</p>
                <p>{new Date(selectedProject.deadline).toLocaleDateString()}</p>
              </div>
              <div className='p-4 bg-purple-50 rounded-lg'>
                <p className='text-text-secondary mb-1'>Applied On</p>
                <p>{new Date(selectedProject.appliedDate).toLocaleDateString()}</p>
              </div>
              <div className='p-4 bg-yellow-50 rounded-lg'>
                <p className='text-text-secondary mb-1'>Status</p>
                <StatusBadge status={selectedProject.status} />
              </div>
            </div>
            <h3 className='text-lg font-semibold my-3'>Required Skills</h3>
            <div className='flex items-center gap-4 mb-2'>
              {selectedProject.skills.map((skill, index) => (
                <span key={index} className='flex items-center gap-2 bg-blue-50 text-primary px-4 py-1 rounded-xl'>
                  {skill}
                </span>
              ))}
            </div>
            <hr className='border-border my-3' />
            <div className='flex items-center gap-2'>
              <button className='flex-1 cursor-pointer justify-center border-2 border-primary text-primary bg-white py-2 rounded-xl hover:text-white hover:bg-primary transition-colors duration-300'
                onClick={closeModal}
              >
                Close
              </button>
              <button className='flex flex-1 justify-center gap-2 items-center border-2 border-primary text-white bg-primary py-2 rounded-xl cursor-pointer'
                onClick={() => navigate('/student-dashboard/nda-requests')}
              >
                <FileText className='w-4 h-4' />
                Review NDA
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AppliedProjects
import React, { useState } from 'react'
import StatusBadge from '../../components/StatusBadge';

const Projects = () => {

  const [projectFilter, setProjectFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'React Dashboard Development',
      category: 'Web Development',
      budget: 800,
      applicants: 8,
      status: 'in-progress',
      deadline: '2024-12-31',
      createdDate: '2024-11-01',
      assignedTo: 'Alex Johnson'
    },
    {
      id: 2,
      title: 'Mobile App UI Design',
      category: 'UI/UX Design',
      budget: 500,
      applicants: 12,
      status: 'nda-sent',
      deadline: '2024-12-20',
      createdDate: '2024-11-05',
      assignedTo: null
    },
    {
      id: 3,
      title: 'Content Writing - Tech Blog',
      category: 'Content Writing',
      budget: 200,
      applicants: 5,
      status: 'applied',
      deadline: '2024-12-15',
      createdDate: '2024-11-10',
      assignedTo: null
    },
    {
      id: 4,
      title: 'Python Data Analysis Script',
      category: 'Data Analysis',
      budget: 400,
      applicants: 3,
      status: 'open',
      deadline: '2024-12-25',
      createdDate: '2024-11-12',
      assignedTo: null
    },
    {
      id: 5,
      title: 'E-commerce Website Landing Page',
      category: 'Web Development',
      budget: 600,
      applicants: 0,
      status: 'open',
      deadline: '2025-01-10',
      createdDate: '2024-11-15',
      assignedTo: null
    },
    {
      id: 6,
      title: 'Social Media Marketing Campaign',
      category: 'Marketing',
      budget: 350,
      applicants: 7,
      status: 'completed',
      deadline: '2024-11-20',
      createdDate: '2024-10-15',
      assignedTo: 'Sarah Chen'
    }
  ];

  const statusFilters = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'open', label: 'Open', count: projects.filter(p => p.status === 'open').length },
    { value: 'applied', label: 'Has Applicants', count: projects.filter(p => p.status === 'applied').length },
    { value: 'in-progress', label: 'In Progress', count: projects.filter(p => p.status === 'in-progress').length },
    { value: 'completed', label: 'Completed', count: projects.filter(p => p.status === 'completed').length }
  ];

  const filteredProjects =  (
    projectFilter === 'all' ? projects : projects.filter((p) => p.status === projectFilter)
  )


  return (
    <div>
      <h1 className='font-bold text-4xl'>Manage Projects</h1>
      <p className='text-text-secondary mt-2'>View, edit, and manage all your posted projects.</p>

      <div className='flex gap-2 mt-8'>
        {statusFilters.map((stat) => (
          <button
            key={stat.value}
            className={`border-2 border-border rounded-2xl px-4 py-2 cursor-pointer ${projectFilter === stat.value ? 'bg-primary text-white border-primary' : 'bg-white'}`}
            onClick={() => setProjectFilter(stat.value)}
          >
            {stat.label} ({stat.count})
          </button>
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        {filteredProjects.map((project) => (
          <div key={project.id} className='bg-white p-4 border border-border'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold'>{project.title}</h2>
              <StatusBadge status={project.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
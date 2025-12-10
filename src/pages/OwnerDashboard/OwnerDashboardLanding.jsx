import { Briefcase, CheckCircle, Clock, Delete, DeleteIcon, DollarSign, Edit, Eye, FileText, Shield, Star, Trash2, Users } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import StatusBadge from '../../components/StatusBadge';

const OwnerDashboardLanding = () => {

  const navigate = useNavigate();

  const stats = [
    { label: 'Total Projects', value: '8', icon: Briefcase, color: 'bg-blue-50 text-primary' },
    { label: 'Pending Applications', value: '15', icon: Users, color: 'bg-purple-50 text-purple-600' },
    { label: 'NDA Pending', value: '3', icon: Shield, color: 'bg-yellow-50 text-warning' },
    { label: 'Completed', value: '5', icon: CheckCircle, color: 'bg-green-50 text-accent' }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'React Dashboard Development',
      budget: 800,
      applicants: 8,
      status: 'in-progress',
      createdAt: '2024-07-01',
      deadline: '2 weeks left',
      assignedTo: 'Alex Johnson',
      hasSubmission: true
    },
    {
      id: 2,
      title: 'Mobile App UI Design',
      budget: 500,
      applicants: 12,
      status: 'nda-sent',
      createdAt: '2024-06-01',
      deadline: '10 days left',
      assignedTo: null,
      hasSubmission: false
    },
    {
      id: 3,
      title: 'Content Writing - Tech Blog',
      budget: 200,
      applicants: 5,
      status: 'applied',
      createdAt: '2024-05-01',
      deadline: '1 week left',
      assignedTo: null,
      hasSubmission: false
    }
  ];

  const recentApplicants = [
    {
      id: 1,
      name: 'Alex Johnson',
      profileImg: null,
      project: 'React Dashboard Development',
      projectId: 1,
      university: 'MIT',
      rating: 4.9,
      appliedDate: '2025-11-28',
      hasCV: true
    },
    {
      id: 2,
      name: 'Sarah Chen',
      profileImg: null,
      project: 'Mobile App UI Design',
      projectId: 2,
      university: 'Stanford',
      rating: 4.8,
      appliedDate: '2025-12-01',
      hasCV: true
    },
    {
      id: 3,
      name: 'Mike Wilson',
      profileImg: null,
      project: 'Content Writing',
      projectId: 3,
      university: 'UCLA',
      rating: 4.7,
      appliedDate: '2025-12-05',
      hasCV: true
    }
  ];

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMs / 3600000);
    const days = Math.floor(diffMs / 86400000);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) return "Just now";
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (weeks < 5) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
    return `${years} year${years > 1 ? "s" : ""} ago`;
  };


  return (
    <div>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-4xl'>Welcome back, TechStart Inc!</h1>
          <p className='text-text-secondary mt-2'>Here's an overview of your projects and applicants.</p>
        </div>

        <button className='flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-2xl hover:bg-blue-600 cursor-pointer'
          onClick={() => navigate('create-project')}
        >
          <Briefcase className='w-5 h-5' />
          <span>Post New Project</span>
        </button>
      </div>

      <div className='grid grid-cols-4 gap-4 mt-8'>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div className='flex flex-col items-center gap-3 bg-white shadow-lg p-3 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer'>
              <div className={`w-12 h-12 ${stat.color} flex items-center justify-center rounded-2xl`}>
                <Icon />
              </div>
              <p className='text-text-secondary text-2xl font-semibold'>{stat.value}</p>
              <p className='text-text-secondary'>{stat.label}</p>
            </div>
          )
        })}
      </div>

      <div className='flex items-center gap-3'>

        {/* Active Projects */}
        <div className='flex-4 mt-10 bg-white shadow p-4 rounded-2xl'>
          <div className='flex items-center justify-between mb-5 px-2'>
            <h2 className='font-semibold text-2xl'>Active Projects</h2>
            <button
              className='text-primary cursor-pointer'
              onClick={() => navigate('projects')}
            >
              View All
            </button>
          </div>
          <div className='flex flex-col gap-5'>
            {recentProjects
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 3)
              .map((project) => (
                <div key={project.id} className='border-2 border-border rounded-2xl p-4'>
                  <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-semibold'>{project.title}</h2>
                    <StatusBadge status={project.status} />
                  </div>

                  <div className='flex items-center gap-5 mt-2'>
                    <span className='flex items-center gap-1 text-text-secondary text-sm'>
                      <DollarSign className='w-4 h-4' />
                      ${project.budget}
                    </span>

                    <span className='flex items-center gap-1 text-text-secondary text-sm'>
                      <Users className='w-4 h-4' />
                      {project.applicants} Applicants
                    </span>

                    <span className='flex items-center gap-1 text-text-secondary text-sm'>
                      <Clock className='w-4 h-4' />
                      {project.deadline}
                    </span>
                  </div>

                  {project.assignedTo && <p className='mt-5'>Assigned to: <span className='text-accent'> {project.assignedTo}</span> </p>}

                  <div className='flex items-center gap-3 mt-5'>
                    <button className='flex items-center gap-2 border-2 border-primary rounded-2xl px-3 py-2 text-primary hover:bg-primary hover:text-white transition-all duration-300'>
                      <Users className='w-4 h-4' />
                      View Applicants
                    </button>

                    <button className='flex items-center gap-2 border-2 border-primary bg-primary rounded-2xl px-3 py-2 text-white hover:bg-white hover:text-primary transition-all duration-300'>
                      <Eye className='w-4 h-4' />
                      Review Work
                    </button>

                    <button className='flex items-center gap-2 border-2 border-primary rounded-2xl px-3 py-2 text-primary hover:bg-primary hover:text-white transition-all duration-300'>
                      <Edit className='w-4 h-4' />
                      Edit
                    </button>

                    <button className='flex items-center gap-2 border-2 border-red-400 rounded-2xl px-3 py-2 text-red-400 hover:bg-red-400 hover:text-white transition-all duration-300'>
                      <Trash2 className='w-4 h-4' />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Recent Applicants */}
        <div className='flex-2 mt-10 bg-white shadow p-4 rounded-2xl'>
          <h2 className='font-semibold text-2xl'>Recent Applicants</h2>

          <div className='flex flex-col gap-3 mt-4'>
            {recentApplicants
              .sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate))
              .slice(0, 3)
              .map((applicant) => (
                <div key={applicant.id} className='border-2 border-border rounded-xl px-4 py-2'>
                  <div className='flex items-center gap-2'>
                    {applicant.profileImg
                      ? <img className='w-12 h-12 border-2 border-primary rounded-full' src={profileImg} alt="" />
                      : <div className='w-12 h-12 border-2 border-primary rounded-full bg-primary text-white flex items-center justify-center'>{applicant.name.slice(0, 2).toLocaleUpperCase()}</div>
                    }
                    <div>
                      <h3 className='font-semibold'>{applicant.name}</h3>
                      <p className='text-text-secondary text-sm'>{applicant.university}</p>
                    </div>
                  </div>
                  <p className='my-3 font-semibold'>{applicant.project}</p>
                  <div className='flex items-center justify-between mb-2'>
                    <p className='text-sm text-text-secondary'>{timeAgo(applicant.appliedDate)}</p>
                    <span className='flex items-center gap-1 text-sm'><Star className='w-4 h-4 text-yellow-500 fill-current' />{applicant.rating}</span>
                  </div>
                  {applicant.hasCV && (
                    <div className='flex items-center gap-1 text-sm text-accent-dark'>
                      <FileText className='w-4 h-4' />
                      CV Available
                    </div>
                  )}
                </div>
              ))
            }

            <button className='border-2 text-primary border-primary py-2 rounded-xl cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300'
              onClick={() => navigate('all-applicants')}
            >
              View All Applicants
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default OwnerDashboardLanding
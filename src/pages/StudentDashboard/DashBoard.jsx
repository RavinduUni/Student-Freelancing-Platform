import { Briefcase, Clock, FileText, Shield, Wallet } from 'lucide-react';
import React from 'react'
import StatusBadge from '../../components/StatusBadge';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {

  const navigate = useNavigate();

  const stats = [
    { label: 'Applications Sent', value: '12', icon: FileText, color: 'bg-blue-50 text-primary' },
    { label: 'Active Projects', value: '3', icon: Briefcase, color: 'bg-green-50 text-accent' },
    { label: 'Pending NDAs', value: '2', icon: Shield, color: 'bg-purple-50 text-purple-600' },
    { label: 'Wallet Balance', value: '$1,240', icon: Wallet, color: 'bg-yellow-50 text-warning' }
  ];

  const recentApplications = [
    {
      title: 'Mobile App UI Design',
      budget: 500,
      status: 'nda-sent',
      appliedDate: '2 days ago'
    },
    {
      title: 'E-commerce Website Development',
      budget: 1200,
      status: 'in-progress',
      appliedDate: '5 days ago'
    },
    {
      title: 'Logo Design for Startup',
      budget: 300,
      status: 'applied',
      appliedDate: '1 week ago'
    }
  ];

  return (
    <div>
      <div>
        <h1 className='font-bold text-4xl'>Welcome back, Alex!</h1>
        <p className='text-text-secondary mt-2'>Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-4 gap-5 my-8'>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className='bg-white rounded-lg shadow-md p-6'>
              <div className='flex items-center justify-between mb-4'>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon />
                </div>
              </div>
              <div className="text-secondary mb-1">{stat.value}</div>
              <p className="text-text-secondary">{stat.label}</p>
            </div>
          )
        })}
      </div>

      <div className='grid grid-cols-3 gap-5'>
        {/* Recent Applications */}
        <div className='col-span-2 bg-white rounded-lg p-5 shadow'>
          <div className='flex justify-between'>
            <h2 className='font-semibold text-2xl'>Recent Applications</h2>
            <button className='text-md text-primary hover:underline'>View All</button>
          </div>

          <ul className='mt-5'>
            {recentApplications.map((application, index) => (
              <li key={index} className='flex justify-between border border-border rounded-2xl p-5 mb-4 hover:border-primary transition-all duration-300'>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>{application.title}</h3>
                  <div className='flex items-center gap-4'>
                    <span className='text-text-secondary'>${application.budget}</span>
                    <span className='flex items-center gap-1 text-text-secondary'>
                      <Clock className='w-4 h-4' />
                      {application.appliedDate}
                    </span>
                  </div>
                </div>
                <div className='flex items-center'>
                  <StatusBadge status={application.status} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions & Notifications */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-secondary font-semibold text-2xl mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <button
                onClick={() => navigate('browse-projects')}
                className="w-full p-3 border-2 border-border rounded-2xl hover:border-primary hover:bg-blue-50 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="text-secondary">Browse Projects</span>
                </div>
              </button>
              <button
                onClick={() => navigate('nda-requests')}
                className="w-full p-3 border-2 border-border rounded-2xl hover:border-purple-500 hover:bg-purple-50 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-secondary">NDA Requests</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">2</span>
                  </div>
                </div>
              </button>
              <button
                onClick={() => navigate('wallet')}
                className="w-full p-3 border-2 border-border rounded-2xl hover:border-accent hover:bg-green-50 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <Wallet className="w-5 h-5 text-accent" />
                  <span className="text-secondary">My Wallet</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default DashBoard
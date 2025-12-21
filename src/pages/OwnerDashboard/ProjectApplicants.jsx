import { ArrowLeft, Eye, Star } from 'lucide-react';
import React, { useState } from 'react'
import StatusBadge from '../../components/StatusBadge';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectApplicants = () => {

    const { projectId } = useParams();

    const navigate = useNavigate();

    const [showNDAModel, setShowNDAModel] = useState(true);

    const projects = [
        {
            id: 1,
            title: 'React Dashboard Development',
            budget: 800,
            deadline: '2 weeks'
        },
        {
            id: 2,
            title: 'Mobile App UI Design',
            budget: 500,
            deadline: '10 days'
        },
        {
            id: 3,
            title: 'Content Writing - Tech Blog',
            budget: 200,
            deadline: '1 week'
        }
    ];

    // All applicants with their project associations
    const allApplicants = [
        {
            id: 1,
            name: 'Alex Johnson',
            projectId: 1,
            university: 'MIT',
            degree: 'Computer Science',
            rating: 4.9,
            completedProjects: 12,
            appliedDate: '2025-11-18T20:00:00Z',
            skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
            projectPlan: 'Available',
            cv: 'Available',
            ndaStatus: 'nda-accepted',
            ndaAcceptedDate: '2025-12-19T10:15:00Z',
            feedbacks: [
                {
                    id: 1,
                    projectTitle: 'E-commerce Platform Frontend',
                    clientName: 'TechCorp Inc.',
                    rating: 5,
                    date: 'Nov 2025',
                    comment: 'Excellent work! Alex delivered the project ahead of schedule with outstanding quality. Very professional and responsive to feedback. Highly recommended!',
                    skills: ['React', 'TypeScript', 'Tailwind CSS']
                },
                {
                    id: 2,
                    projectTitle: 'Dashboard Analytics Tool',
                    clientName: 'DataViz Solutions',
                    rating: 5,
                    date: 'Oct 2025',
                    comment: 'Amazing developer with great attention to detail. The dashboard exceeded our expectations. Will definitely work with Alex again.',
                    skills: ['React', 'Chart.js', 'Node.js']
                },
                {
                    id: 3,
                    projectTitle: 'Mobile App Landing Page',
                    clientName: 'StartupX',
                    rating: 4.8,
                    date: 'Sep 2025',
                    comment: 'Great communication and solid technical skills. Delivered a beautiful, responsive landing page. Minor revisions needed but overall very satisfied.',
                    skills: ['HTML', 'CSS', 'JavaScript']
                }
            ]
        },
        {
            id: 2,
            name: 'Sarah Chen',
            projectId: 1,
            university: 'Stanford University',
            degree: 'Software Engineering',
            rating: 4.8,
            completedProjects: 15,
            appliedDate: '2025-12-11T10:15:00Z',
            skills: ['React', 'Vue.js', 'UI/UX', 'Figma'],
            projectPlan: 'Available',
            cv: 'Available',
            ndaStatus: 'nda-sent',
            ndaSentDate: '2025-12-11T10:15:00Z',
            feedbacks: [
                {
                    id: 1,
                    projectTitle: 'SaaS Product Redesign',
                    clientName: 'CloudTech',
                    rating: 5,
                    date: 'Dec 2025',
                    comment: 'Sarah is an exceptional designer and developer. The UI/UX work was top-notch and the implementation was flawless. Highly professional!',
                    skills: ['Figma', 'React', 'UI/UX']
                },
                {
                    id: 2,
                    projectTitle: 'Company Website Revamp',
                    clientName: 'Digital Agency Pro',
                    rating: 4.7,
                    date: 'Nov 2025',
                    comment: 'Very talented and creative. Delivered modern, clean designs with smooth animations. Great experience working together.',
                    skills: ['Vue.js', 'CSS', 'Figma']
                }
            ]
        },
        {
            id: 3,
            name: 'Mike Wilson',
            projectId: 1,
            university: 'UCLA',
            degree: 'Information Technology',
            rating: 4.7,
            completedProjects: 8,
            appliedDate: '2025-12-19T10:15:00Z',
            skills: ['JavaScript', 'React', 'CSS', 'HTML'],
            projectPlan: 'Available',
            cv: 'Available',
            ndaStatus: 'not-sent',
            feedbacks: [
                {
                    id: 1,
                    projectTitle: 'Portfolio Website',
                    clientName: 'Creative Studio',
                    rating: 4.5,
                    date: 'Oct 2025',
                    comment: 'Good work overall. Mike was responsive and made revisions promptly. The final product met our requirements.',
                    skills: ['HTML', 'CSS', 'JavaScript']
                },
                {
                    id: 2,
                    projectTitle: 'Blog Platform Development',
                    clientName: 'Content Creators Hub',
                    rating: 4.9,
                    date: 'Sep 2025',
                    comment: 'Fantastic job! Clean code, great documentation, and excellent communication throughout the project.',
                    skills: ['React', 'Node.js', 'MongoDB']
                }
            ]
        },
        {
            id: 4,
            name: 'Emma Davis',
            projectId: 2,
            university: 'UC Berkeley',
            degree: 'Computer Science',
            rating: 4.9,
            completedProjects: 18,
            appliedDate: '2025-12-19T10:15:00Z',
            skills: ['React Native', 'Flutter', 'UI/UX', 'Figma'],
            projectPlan: 'Available',
            cv: 'Available',
            ndaStatus: 'nda-accepted',
            ndaAcceptedDate: '2025-12-19T10:15:00Z'
        },
        {
            id: 5,
            name: 'James Brown',
            projectId: 2,
            university: 'Harvard University',
            degree: 'Design',
            rating: 4.6,
            completedProjects: 10,
            appliedDate: '2025-12-19T10:15:00Z',
            skills: ['Figma', 'Adobe XD', 'Sketch', 'UI/UX'],
            projectPlan: 'Available',
            cv: 'Available',
            ndaStatus: 'pending',
            ndaSentDate: '2025-12-19T10:15:00Z'
        },
        {
            id: 6,
            name: 'Sophia Martinez',
            projectId: 3,
            university: 'Columbia University',
            degree: 'English Literature',
            rating: 4.8,
            completedProjects: 14,
            appliedDate: '2025-12-19T10:15:00Z',
            skills: ['Content Writing', 'SEO', 'Copywriting', 'Technical Writing'],
            projectPlan: 'Available',
            cv: 'Available',
            ndaStatus: 'not-sent'
        },
        {
            id: 7,
            name: 'David Lee',
            projectId: 3,
            university: 'NYU',
            degree: 'Journalism',
            rating: 4.7,
            completedProjects: 11,
            appliedDate: '2025-12-19T06:15:00Z',
            skills: ['Content Writing', 'Blogging', 'Research', 'Editing'],
            projectPlan: 'Available',
            cv: 'Available',
            ndaStatus: 'not-sent'
        }
    ];

    const project = projects.find((p) => p.id === Number(projectId));
    const projectApplicants = allApplicants.filter((a) => a.projectId === Number(projectId));

    const timeAgo = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();

        let diffMs = now - date;

        // ✅ Handle future dates
        if (diffMs < 0) {
            return "Just now";
        }

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
        <div className='mt-3 flex flex-col gap-4'>
            <div className='bg-white py-2 px-5 rounded-xl border border-border'>
                <div className='flex items-start justify-between my-5'>
                    <div>
                        <h2 className='text-xl font-semibold'>{project.title}</h2>
                        <div className='flex items-center gap-4 text-text-secondary'>
                            <span>${project.budget}</span>
                            <span>{project.deadline}</span>
                            <span>{projectApplicants.length} applicants</span>
                        </div>
                    </div>
                    <button
                        className='text-primary flex items-center gap-2 border-2 border-primary py-1 px-3 rounded-xl hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer'
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft className='w-4 h-4' />
                        Go Back
                    </button>
                </div>

                <div className='grid grid-cols-2 gap-3 mb-5'>
                    {projectApplicants.map((applicant) => (
                        <div key={applicant.id} className='bg-white border-2 border-border shadow rounded-xl p-3'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <div className='w-15 h-15 bg-primary text-white rounded-full flex items-center justify-center'>{applicant.name.slice(0, 2).toUpperCase()}</div>
                                    <div>
                                        <h1 className='font-semibold'>{applicant.name}</h1>
                                        <p className='text-text-secondary'>{applicant.university}</p>
                                        <p className='text-text-secondary'>{applicant.degree}</p>
                                    </div>
                                </div>
                                <div className='flex text-yellow-500 items-center gap-1'>
                                    <Star className="w-4 h-4 fill-current" />
                                    <span>{applicant.rating}</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-3 text-sm mt-3'>
                                {applicant.skills.map((skill) => (
                                    <span className='text-primary bg-blue-50 py-1 px-3 rounded-2xl' key={skill}>{skill}</span>
                                ))}
                            </div>

                            <div className='mt-4'>
                                <StatusBadge status={applicant.ndaStatus} />
                            </div>

                            <div className='flex items-center gap-5 text-text-secondary text-sm mt-4'>
                                <span>{applicant.completedProjects} projects completed</span>
                                <span>{timeAgo(applicant.appliedDate)}</span>
                            </div>

                            <div className='flex items-center gap-2 mt-3'>
                                <button className='flex items-center gap-1 border-2 border-primary text-primary py-1 px-2 rounded-xl'>
                                    <Eye className='w-4 h-4' />
                                    View Details
                                </button>

                                <button className='flex items-center gap-1 border-2 border-primary text-primary py-1 px-2 rounded-xl'>
                                    <Eye className='w-4 h-4' />
                                    View NDA
                                </button>

                                <button className='flex items-center gap-1 border-2 border-primary text-primary py-1 px-2 rounded-xl'>
                                    <Eye className='w-4 h-4' />
                                    Assign Project
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showNDAModel && (
                <div className='fixed inset-0 z-50 flex items-center justify-center'>
                    <div className='absolute inset-0 bg-black opacity-70 transition-opacity duration-300' />
                    <div className='min-w-3xl bg-white z-50'>
                        <h1>NDA Response Review</h1>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectApplicants
import { ArrowLeft, Award, Briefcase, Clock, ExternalLink, Eye, FileText, GraduationCap, Mail, MapPin, Phone, Star, UserCheck, X } from 'lucide-react'
import React, { useRef } from 'react'
import heroImg2 from '../../assets/heroImg2.jpg';
import StatusBadge from '../../components/StatusBadge';
import { Link, useNavigate } from 'react-router-dom';

const ViewStudentDetails = () => {

  const navigate = useNavigate();

  const feedbackRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - feedbackRef.current.offsetLeft;
    scrollLeft.current = feedbackRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const x = e.pageX - feedbackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2; // drag speed
    feedbackRef.current.scrollLeft = scrollLeft.current - walk;
  };


  const applicant = {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex.johnson@mit.edu',
    phone: '+1 (555) 123-4567',
    profilePhoto: heroImg2,
    projectId: 1,
    university: 'MIT',
    degree: 'Computer Science, Senior',
    location: 'Cambridge, MA',
    rating: 4.9,
    completedProjects: 12,
    totalEarnings: 12500,
    memberSince: 'Jan 2024',
    appliedDate: '2 hours ago',
    responseRate: '98%',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'AWS', 'MongoDB', 'REST APIs'],
    bio: 'Passionate full-stack developer with 2+ years of experience building modern web applications. Specialized in React and Node.js ecosystems. I love creating clean, efficient, and scalable solutions. Currently pursuing my Bachelor\'s in Computer Science at MIT with a focus on software engineering and cloud technologies. Available for freelance projects 20+ hours per week.',
    projectPlan: 'Available',
    cv: 'Available',
    ndaStatus: 'nda-accepted',
    ndaAcceptedDate: '1 hour ago',
    portfolio: 'https://alexjohnson.dev',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    github: 'https://github.com/alexjohnson',
    feedbacks: [
      {
        id: 1,
        projectTitle: 'E-commerce Platform Frontend',
        clientName: 'TechCorp Inc.',
        clientLogo: null,
        rating: 5,
        date: 'Nov 2025',
        budget: 1200,
        duration: '3 weeks',
        comment: 'Excellent work! Alex delivered the project ahead of schedule with outstanding quality. Very professional and responsive to feedback. The code was clean, well-documented, and exceeded our expectations. Highly recommended for any React-based projects!',
        skills: ['React', 'TypeScript', 'Tailwind CSS']
      },
      {
        id: 2,
        projectTitle: 'Dashboard Analytics Tool',
        clientName: 'DataViz Solutions',
        clientLogo: null,
        rating: 5,
        date: 'Oct 2025',
        budget: 1500,
        duration: '4 weeks',
        comment: 'Amazing developer with great attention to detail. The dashboard exceeded our expectations with beautiful visualizations and smooth performance. Will definitely work with Alex again on future projects.',
        skills: ['React', 'Chart.js', 'Node.js']
      },
      {
        id: 3,
        projectTitle: 'Mobile App Landing Page',
        clientName: 'StartupX',
        clientLogo: null,
        rating: 4.8,
        date: 'Sep 2025',
        budget: 800,
        duration: '2 weeks',
        comment: 'Great communication and solid technical skills. Delivered a beautiful, responsive landing page that works perfectly across all devices. Minor revisions needed but overall very satisfied with the final result.',
        skills: ['HTML', 'CSS', 'JavaScript']
      },
      {
        id: 4,
        projectTitle: 'API Integration Service',
        clientName: 'CloudSync Pro',
        clientLogo: null,
        rating: 4.9,
        date: 'Aug 2025',
        budget: 1000,
        duration: '2 weeks',
        comment: 'Exceptional problem-solving skills. Alex integrated multiple third-party APIs seamlessly and handled complex authentication flows with ease. Professional, timely, and great to work with!',
        skills: ['Node.js', 'REST APIs', 'AWS']
      },
      {
        id: 5,
        projectTitle: 'Database Migration Project',
        clientName: 'Enterprise Solutions Ltd',
        clientLogo: null,
        rating: 4.7,
        date: 'Jul 2025',
        budget: 900,
        duration: '3 weeks',
        comment: 'Solid performance on a challenging migration project. Alex demonstrated strong database knowledge and completed the task efficiently. Good communication throughout the project.',
        skills: ['MongoDB', 'Node.js', 'Python']
      }
    ]
  };

  return (
    <div>
      <h1 className='flex items-center gap-2 text-text-secondary mb-4 cursor-pointer' onClick={() => navigate(-1)} ><ArrowLeft className='w-4 h-4' /> Back to applicants</h1>
      <div className='bg-white p-4 rounded-xl shadow'>
        <div className='flex items-center gap-4'>
          {applicant.profilePhoto
            ?
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-200 shadow">
              <img
                src={applicant.profilePhoto}
                alt="profile"
                className="w-full h-full object-cover object-center"
              />
            </div>
            : <div className='w-23 h-23 rounded-full bg-primary flex object-fit-cover items-center justify-center text-2xl text-white'>{applicant.name.slice(0, 2)}</div>}
          <div>
            <h1 className='text-3xl font-semibold'>{applicant.name}</h1>
            <div className='flex items-center gap-4 text-sm mt-2 text-secondary'>
              <span className='flex items-center gap-2'><GraduationCap className='w-5 h-5 text-primary' />{applicant.university}</span>
              <span className='flex items-center gap-2'><Award className='w-5 h-5 text-primary' />Computer Science</span>
              <span className='flex items-center gap-2'><MapPin className='w-5 h-5 text-primary' />Computer Science</span>
            </div>
            <div className='flex items-center gap-4 text-sm mt-2 text-secondary'>
              <span className='flex items-center gap-2'><Mail className='w-4 h-4 text-primary' />alex.johnson@gmail.com</span>
              <span className='flex items-center gap-2'><Phone className='w-4 h-4 text-primary' />+94 704 941 228</span>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-2 mt-8'>
          <div className='border border-border bg-blue-50 rounded-2xl flex items-center gap-2 px-3 py-5'>
            <div className='w-10 h-10 bg-primary text-white flex items-center justify-center rounded-xl'>
              <Briefcase />
            </div>
            <div>
              <h4 className='font-semibold'>Projects Completed</h4>
              <p className='text-text-secondary'>{applicant.completedProjects}</p>
            </div>
          </div>

          <div className='border border-border bg-green-50 rounded-2xl flex items-center gap-2 px-4 py-5'>
            <div className='w-10 h-10 bg-accent text-white flex items-center justify-center rounded-xl'>
              <Award />
            </div>
            <div>
              <h4 className='font-semibold'>Member Since</h4>
              <p className='text-text-secondary'>{applicant.memberSince}</p>
            </div>
          </div>

          <div className='border border-border bg-purple-50 rounded-2xl flex items-center gap-2 px-4 py-5'>
            <div className='w-10 h-10 bg-purple-500 text-white flex items-center justify-center rounded-xl'>
              <Clock />
            </div>
            <div>
              <h4 className='font-semibold'>Applied</h4>
              <p className='text-text-secondary'>{applicant.appliedDate}</p>
            </div>
          </div>

          <div className='border border-border bg-yellow-50 rounded-2xl flex items-center gap-2 px-4 py-5'>
            <div className='w-10 h-10 bg-yellow-500 text-white flex items-center justify-center rounded-xl'>
              <Star />
            </div>
            <div>
              <h4 className='font-semibold'>Ratings</h4>
              <p className='text-text-secondary'>{applicant.rating}</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between mt-7 bg-background p-4 rounded-xl'>
          <StatusBadge status={applicant.ndaStatus} />
          <div className='flex items-center gap-3'>
            <button className='flex items-center gap-2 text-sm border-2 border-primary text-primary px-4 py-2 rounded-xl hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer'>
              <Eye className='w-4 h-4' />
              View NDA
            </button>
            <button className='flex items-center gap-2 text-sm border-2 border-primary bg-primary text-white px-4 py-2 rounded-xl hover:bg-blue-600 cursor-pointer'>
              <UserCheck className='w-4 h-4' />
              Assign Project
            </button>
            <button className='flex items-center gap-2 text-sm border-2 border-red-400 text-red-400 px-4 py-2 rounded-xl hover:bg-red-400 hover:text-white transition-colors duration-200 cursor-pointer'>
              <X className='w-4 h-4' />
              Reject Application
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-3 mt-10 items-start'>
        {/* left column */}
        <div className='col-span-2'>
          <div className='flex gap-5 bg-white p-4 shadow rounded-2xl'>
            <div className='w-13 h-13 bg-blue-50 flex items-center justify-center rounded-2xl'>
              <Briefcase className='text-primary' />
            </div>
            <div>
              <h1 className='font-semibold text-2xl mb-1'>Applied for</h1>
              <p className='font-semibold text-secondary text-xl'>React Dashboard Development</p>
              <div className='flex items-center gap-5 mt-5'>
                <span>
                  <p className='text-sm text-text-secondary'>Budget:</p>
                  <p className='text-primary'>$800</p>
                </span>
                <span>
                  <p className='text-sm text-text-secondary'>Deadline:</p>
                  <p className='text-primary'>2 weeks</p>
                </span>
              </div>
            </div>
          </div>

          <div className='bg-white p-4 mt-7 shadow rounded-2xl'>
            <div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-blue-50 flex items-center justify-center rounded-2xl'>
                  <FileText className='text-primary' />
                </div>
                <h4 className='text-xl font-semibold'>About</h4>
              </div>
              <p className='text-text-secondary text-sm mt-2'>{applicant.bio}</p>
            </div>

            <div className='mt-7'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-blue-50 flex items-center justify-center rounded-2xl'>
                  <Award className='text-primary' />
                </div>
                <h4 className='text-xl font-semibold'>Skills & Expertise</h4>
              </div>
              <div className='flex items-center gap-2 mt-4 flex-wrap'>
                {applicant.skills.map((skill, index) => (
                  <p key={index} className='text-primary bg-blue-50 px-4 py-2 rounded-xl'>{skill}</p>
                ))}
              </div>
            </div>

            <div className='mt-10'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-blue-50 flex items-center justify-center rounded-2xl'>
                  <Star className='text-primary' />
                </div>
                <div>
                  <h4 className='text-xl font-semibold'>Client Feedbacks</h4>
                  <p className='text-sm text-secondary'>4.9 average rating</p>
                </div>
              </div>

              <ul
                ref={feedbackRef}
                className='flex gap-4 overflow-x-auto mt-4 cursor-grab active:cursor-grabbing select-none'
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
              >
                {applicant.feedbacks.map((feedback, id) => (
                  <li key={id} className='bg-background p-4 rounded-2xl shadow min-w-[450px]'>
                    <div className='flex items-center justify-between'>
                      <div className='flex gap-2'>
                        <div className='w-12 h-12 bg-primary text-white flex items-center justify-center rounded-2xl'>
                          <h4>{feedback.clientName.slice(0, 2).toUpperCase()}</h4>
                        </div>
                        <div>
                          <h2 className='font-semibold text-lg'>{feedback.projectTitle}</h2>
                          <h5 className='text-sm text-secondary'>{feedback.clientName}</h5>
                        </div>
                      </div>

                      <span className='flex items-center gap-1 text-yellow-500 bg-yellow-50 py-1 px-2 text-sm rounded-xl'>
                        <Star className='w-4 h-4 fill-current' />
                        {feedback.rating}
                      </span>

                    </div>
                    <p className='text-text-secondary text-sm mt-2'>{feedback.comment}</p>

                    <div className='flex items-center mt-4'>
                      <div className='border-r-2 border-border pr-5'>
                        <p className='text-sm font-semibold'>{feedback.date}</p>
                        <p className='text-xs text-secondary'>Date</p>
                      </div>

                      <div className='pl-5'>
                        <p className='text-sm font-semibold'>${feedback.budget}</p>
                        <p className='text-xs text-secondary'>Budget</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() =>
                    feedbackRef.current.scrollBy({ left: -400, behavior: 'smooth' })
                  }
                  className=" hover:text-primary transition cursor-pointer text-sm"
                >
                  ← Previous
                </button>

                <button
                  onClick={() =>
                    feedbackRef.current.scrollBy({ left: 400, behavior: 'smooth' })
                  }
                  className=" hover:text-primary transition cursor-pointer text-sm"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='col-span-1 bg-white rounded-2xl shadow h-fit'>
          <div className='p-4'>
            <div className='flex items-center gap-4'>
              <div className='bg-blue-50 w-10 h-10 flex items-center justify-center text-primary rounded-xl'>
                <FileText />
              </div>
              <h2 className='font-semibold text-xl'>Documents</h2>
            </div>

            <div className='bg-background border border-border p-4 rounded-2xl mt-4'>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500'>
                  <FileText />
                </div>
                <div>
                  <h4 className='text-secondary'>CV / Resume</h4>
                  <p className='text-sm text-text-secondary'>PDF • 245 KB</p>
                </div>
              </div>
              <button className='border-2 border-primary rounded-xl text-primary w-full py-1 mt-3 cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200'>Download</button>
            </div>
          </div>

          <div className='p-4'>
            <div className='flex items-center gap-4'>
              <div className='bg-blue-50 w-10 h-10 flex items-center justify-center text-primary rounded-xl'>
                <ExternalLink />
              </div>
              <h2 className='font-semibold text-xl'>Links</h2>
            </div>

            <div>
              {applicant.portfolio && (
                <div className='bg-background border border-border px-4 py-3 rounded-2xl mt-4 hover:bg-blue-50 hover:text-primary hover:border-primary transition-colors duration-200'>
                  <a
                    href={applicant.portfolio}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2 text-secondary'>
                        <Briefcase className='w-5 h-5 text-primary' />
                        Portfolio
                      </div>
                      <ExternalLink className='w-5 h-5 text-primary' />
                    </div>
                  </a>
                </div>
              )}

              {applicant.linkedin && (
                <div className='bg-background border border-border px-4 py-3 rounded-2xl mt-4 hover:bg-blue-50 hover:text-primary hover:border-primary transition-colors duration-200'>
                  <a
                    href={applicant.linkedin}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2 text-secondary'>
                        <Briefcase className='w-5 h-5 text-primary' />
                        LinkedIn
                      </div>
                      <ExternalLink className='w-5 h-5 text-primary' />
                    </div>
                  </a>
                </div>
              )}

              {applicant.github && (
                <div className='bg-background border border-border px-4 py-3 rounded-2xl mt-4 hover:bg-blue-50 hover:text-primary hover:border-primary transition-colors duration-200'>
                  <a
                    href={applicant.github}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2 text-secondary'>
                        <Briefcase className='w-5 h-5 text-primary' />
                        Github
                      </div>
                      <ExternalLink className='w-5 h-5 text-primary' />
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>



      </div>
    </div>
  )
}

export default ViewStudentDetails
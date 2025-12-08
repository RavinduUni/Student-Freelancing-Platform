import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Brain, Briefcase, BriefcaseBusiness, ChevronRight, Code, DollarSign, Palette, Search, Smartphone, Star, TrendingUp, Users } from 'lucide-react'
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';
import heroImg1 from '../assets/heroImg1.jpg';

const Hero = () => {

    const navigate = useNavigate();

    const stats = [
        { icon: Users, value: '10,000+', label: 'Active Students' },
        { icon: Briefcase, value: '5,000+', label: 'Projects Posted' },
        { icon: DollarSign, value: '$2M+', label: 'Paid to Students' },
        { icon: Star, value: '4.9/5', label: 'Average Rating' }
    ];

    const steps = [
        { title: 'Create Profile', description: 'Sign up as a student or project owner' },
        { title: 'Browse/Post Projects', description: 'Students find projects, owners post opportunities' },
        { title: 'Apply & Connect', description: 'Submit applications with CV and project plans' },
        { title: 'Get Paid', description: 'Complete work and receive payment securely' }
    ];

    const categories = [
        {
            icon: Code,
            name: 'Web Development',
            count: 245,
            color: 'bg-blue-50 text-blue-600'
        },
        {
            icon: Brain,
            name: 'Machine Learning',
            count: 128,
            color: 'bg-purple-50 text-purple-600'
        },
        {
            icon: Palette,
            name: 'UI/UX Design',
            count: 189,
            color: 'bg-pink-50 text-pink-600'
        },
        {
            icon: Smartphone,
            name: 'Mobile Development',
            count: 156,
            color: 'bg-green-50 text-green-600'
        },
        {
            icon: TrendingUp,
            name: 'Data Analysis',
            count: 97,
            color: 'bg-orange-50 text-orange-600'
        },
        {
            icon: Briefcase,
            name: 'Content Writing',
            count: 134,
            color: 'bg-yellow-50 text-yellow-600'
        }
    ];

    const latestProjects = [
        {
            id: 1,
            title: 'E-commerce Website Development',
            description: 'Build a modern, responsive e-commerce platform with React and Node.js. Includes product catalog, shopping cart, and payment integration.',
            budget: 850,
            deadline: '2 weeks',
            category: 'Web Development',
            skills: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            ownerRating: 4.8,
            applicants: 12
        },
        {
            id: 2,
            title: 'Mobile App UI/UX Design',
            description: 'Design modern, user-friendly interfaces for a fitness tracking mobile app. Need wireframes, mockups, and interactive prototypes.',
            budget: 600,
            deadline: '10 days',
            category: 'UI/UX Design',
            skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping'],
            ownerRating: 4.9,
            applicants: 8
        },
        {
            id: 3,
            title: 'Machine Learning Model for Price Prediction',
            description: 'Develop an ML model to predict real estate prices. Need data preprocessing, model training, and API deployment.',
            budget: 950,
            deadline: '3 weeks',
            category: 'Machine Learning',
            skills: ['Python', 'TensorFlow', 'scikit-learn', 'Flask'],
            ownerRating: 4.7,
            applicants: 15
        },
        {
            id: 4,
            title: 'iOS App Development',
            description: 'Create a social networking iOS app with real-time messaging, user profiles, and media sharing capabilities.',
            budget: 1200,
            deadline: '4 weeks',
            category: 'Mobile Development',
            skills: ['Swift', 'SwiftUI', 'Firebase', 'REST API'],
            ownerRating: 4.9,
            applicants: 10
        },
        {
            id: 5,
            title: 'Business Dashboard with Data Visualization',
            description: 'Build an interactive analytics dashboard with charts, graphs, and real-time data updates for business metrics.',
            budget: 700,
            deadline: '2 weeks',
            category: 'Data Analysis',
            skills: ['React', 'D3.js', 'Python', 'SQL'],
            ownerRating: 4.6,
            applicants: 14
        },
        {
            id: 6,
            title: 'Brand Identity & Logo Design',
            description: 'Create a complete brand identity package including logo, color palette, typography, and brand guidelines.',
            budget: 450,
            deadline: '1 week',
            category: 'UI/UX Design',
            skills: ['Illustrator', 'Photoshop', 'Brand Design'],
            ownerRating: 4.8,
            applicants: 20
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Chen',
            role: 'CS Student, MIT',
            image: '👩‍💻',
            text: 'I earned $3,500 last semester working on real projects. Amazing experience!',
            rate: 5
        },
        {
            name: 'Mike Johnson',
            role: 'Startup Founder',
            image: '👨‍💼',
            text: 'Found talented students who delivered quality work at reasonable rates.',
            rate: 4.5
        },
        {
            name: 'Emma Davis',
            role: 'Design Student, UCLA',
            image: '👩‍🎨',
            text: 'Built my portfolio while earning money. Best platform for student freelancers!',
            rate: 4.7
        },
        {
            name: 'Sarah Chen',
            role: 'CS Student, MIT',
            image: '👩‍💻',
            text: 'I earned $3,500 last semester working on real projects. Amazing experience!',
            rate: 5
        },
        {
            name: 'Mike Johnson',
            role: 'Startup Founder',
            image: '👨‍💼',
            text: 'Found talented students who delivered quality work at reasonable rates.',
            rate: 4.5
        },
        {
            name: 'Emma Davis',
            role: 'Design Student, UCLA',
            image: '👩‍🎨',
            text: 'Built my portfolio while earning money. Best platform for student freelancers!',
            rate: 4.7
        }
    ];


    return (
        <div className='container px-20 my-10 mx-auto'>
            <div className='relative text-white p-20 flex flex-col items-center justify-center min-h-[90vh] rounded-lg mb-10 text-center bg-cover bg-center' style={{ backgroundImage: `url(${heroImg1})` }}>
                <div className='absolute inset-0 bg-linear-to-r from-primary-dark via-primary  to-transparent' />
                <div className='relative z-10'>
                    <h2 className='text-5xl/13 mb-4 font-semibold'>Connect Students With,  <br /> <span className='bg-clip-text bg-linear-to-t from-cyan-500 to-cyan-100 text-transparent'>Real-World Projects</span></h2>
                    <p className='text-md font-light mb-8'>The premier platform matching university students with paid freelance micro-projects.<br /> Build your portfolio, earn money, and gain real-world experience.</p>

                    <div className='bg-white rounded-2xl px-3 py-2 text-black flex justify-between items-center w-full max-w-2xl mx-auto'>
                        <div className='flex items-center'>
                            <Search className='inline-block mr-2 opacity-35' />
                            <input type="text" placeholder='Search For Project' className='bg-transparent border-gray-300 focus:outline-none focus:border-blue-600' />
                        </div>
                        <div className='ml-4 flex items-center'>
                            <BriefcaseBusiness className='inline-block mr-2 opacity-35' />
                            <input type="text" placeholder='Skill' className='bg-transparent border-gray-300 focus:outline-none focus:border-blue-600' />
                        </div>
                        <button className='bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium'>Search</button>
                    </div>

                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-9'>
                            {stats.map((stat, index) => (
                                <div key={index} className=' rounded-lg text-center'>
                                    <stat.icon className='text-white mx-auto mb-4' size={40} />
                                    <h3 className='text-2xl text-black font-semibold mb-2'>{stat.value}</h3>
                                    <p className='text-white'>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-16 bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-15'>
                <div className='flex justify-center items-center gap-8 flex-wrap'>
                    <div className='text-center'>
                        <div className='rounded-full bg-white w-24 h-24 flex justify-center items-center shadow-md mx-auto mb-2'>
                            <Users className='inline-block text-primary' size={50} />
                        </div>
                        <p>Students</p>
                    </div>
                    <div className="text-4xl text-primary">⟷</div>
                    <div className='text-center'>
                        <div className='rounded-full bg-white w-24 h-24 flex justify-center items-center shadow-md mx-auto mb-2'>
                            <Briefcase className='inline-block text-accent' size={50} />
                        </div>
                        <p>Employers</p>
                    </div>
                </div>
                <div>
                    <div className='text-center mt-10 flex justify-center items-center gap-6 flex-wrap'>
                        <button className='bg-primary text-white px-6 py-4 rounded-lg font-medium flex items-center gap-2'>
                            I'm a Student
                            <ArrowRight className='inline-block' />
                        </button>
                        <button className='bg-white text-primary border px-6 py-4 rounded-lg font-medium flex items-center gap-2'>
                            I'm a Project Owner
                            <ArrowRight className='inline-block' />
                        </button>
                    </div>
                </div>
            </div>

            <div className='py-10'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-16'>
                    {steps.map((step, index) => (
                        <div key={index} className='bg-white p-6 rounded-lg text-center'>
                            <div className='text-white bg-primary rounded-full w-12 h-12 flex justify-center items-center  font-bold mb-4 mx-auto'>{index + 1}</div>
                            <h3 className='text-2xl font-semibold mb-2'>{step.title}</h3>
                            <p className='text-gray-600'>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-20'>
                <div className='text-center'>
                    <h3 className='text-4xl font-semibold'>Browse by Category</h3>
                    <p className='text-text-secondary'>Find projects in your area of expertise</p>
                </div>
                <div className='mt-10'>
                    <div className='grid grid-cols-3 gap-10 mt-6'>
                        {categories.map((category, index) => (
                            <div key={index} className='border-2 border-border p-6 rounded-2xl hover:border-primary hover:shadow-lg transition-all duration-300'>
                                <div className='flex items-center justify-between'>
                                    <div className={`p-5 rounded-xl mr-4 ${category.color} `}>
                                        <category.icon size={30} />
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-text-secondary group-hover:text-primary transition-colors" />
                                </div>
                                <h2 className='font-semibold text-2xl mt-2'>{category.name}</h2>
                                <p className="text-text-secondary mt-2">{category.count} projects available</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='py-20 px-4 mt-30 bg-background rounded-xl'>
                <div className='flex justify-between px-2'>
                    <div>
                        <h2 className='font-semibold text-4xl'>Latest Projects</h2>
                        <p className='text-text-secondary mt-3'>Fresh opportunities posted by verified project owners</p>
                    </div>
                    <button
                        className='group flex text-primary gap-2 items-center border-2 text-center my-auto px-5 py-3 rounded-xl border-primary hover:bg-primary hover:text-white transition-all duration-500'>
                        View All
                        <ArrowRight className='text-primary hover:text-white group-hover:text-white transition-all duration-500' />
                    </button>
                </div>

                <div className='grid grid-cols-3 gap-10 mt-15'>
                    {latestProjects.map((project, id) => (
                        <ProjectCard key={id} project={project} />
                    ))}
                </div>
            </div>


            <div className='mt-20'>
                <h1 className='text-center my-20 text-4xl font-semibold'>What Our Users Say</h1>
                <div className='grid grid-cols-3 gap-10'>
                    {testimonials.slice(0, 6).map((testimonial, index) => (
                        <div key={index} className='shadow-md p-5 rounded-xl'>
                            <div className='flex items-center my-3'>
                                <span className='text-5xl'>{testimonial.image}</span>
                                <div>
                                    <h2 className='text-xl font-semibold '>{testimonial.name}</h2>
                                    <p className='text-gray-500'>{testimonial.role}</p>
                                </div>
                            </div>
                            <p className='text-gray-800'>{testimonial.text}</p>

                            <div className='flex items-center gap-1 mt-3'>
                                {[1, 2, 3, 4, 5].map((star, index) => (
                                    <Star key={index} className={star <= testimonial.rate
                                        ? 'w-5 h-5 text-yellow-500 fill-yellow-500'
                                        : "w-5 h-5 text-gray-300"
                                    } />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-20'>
                <div className='text-center bg-primary p-30 rounded-xl'>
                    <h1 className='text-white text-4xl font-semibold'>Ready to Get Started?</h1>
                    <p className='text-white my-5'>Join thousands of students and project owners already using StudentFreelance</p>
                    <button className='bg-gray-800 text-white p-5 rounded-2xl'>Create Free Account</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
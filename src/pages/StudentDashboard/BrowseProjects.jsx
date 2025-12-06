import { ChevronDown, ChevronUp, Clock, DollarSign, Filter, Search, SortAsc, SortAscIcon, Tag } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import ProjectCard from '../../components/ProjectCard';

const BrowseProjects = () => {
  const categories = [
    { label: 'All Categories', value: 'all' },
    { label: 'Web Development', value: 'web development' },
    { label: 'Machine Learning', value: 'machine learning' },
    { label: 'UI/UX Designing', value: 'ui/ux designing' },
    { label: 'Mobile Development', value: 'mobile development' },
    { label: 'Data Analysis', value: 'data analysis' },
    { label: 'API Development', value: 'api development' }
  ];

  const budgetOptions = [
    { label: '$0 - $500', value: '0-500', min: 0, max: 500 },
    { label: '$500 - $1000', value: '500-1000', min: 500, max: 1000 },
    { label: '$1000 - $2000', value: '1000-2000', min: 1000, max: 2000 },
    { label: '$2000+', value: '2000-999999', min: 2000, max: 999999 }
  ];

  const deadlineOptions = [
    { label: 'Under 1 week', value: '1-7', min: 1, max: 7 },
    { label: '1-2 weeks', value: '8-14', min: 8, max: 14 },
    { label: '2-4 weeks', value: '15-30', min: 15, max: 30 },
    { label: '1+ month', value: '31-999', min: 31, max: 999 }
  ];

  const allSkills = [
    'React', 'Vue.js', 'Angular', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Neural Networks', 'Deep Learning',
    'Figma', 'Adobe XD', 'Sketch', 'Wireframing', 'Prototyping', 'User Research',
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android',
    'Python', 'Pandas', 'NumPy', 'Data Visualization', 'SQL', 'Excel',
    'REST API', 'GraphQL', 'FastAPI', 'Django', 'Flask', 'Microservices'
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website with React & Node.js',
      budget: 1500,
      deadline: '3 weeks',
      category: 'Web Development',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      ownerRating: 4.8,
      description: 'Build a full-stack e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard.',
      postedDate: '2024-11-25'
    },
    {
      id: 2,
      title: 'Image Classification ML Model',
      budget: 2200,
      deadline: '4 weeks',
      category: 'Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Python', 'Deep Learning'],
      ownerRating: 4.9,
      description: 'Develop a CNN-based image classification model to categorize product images with 90%+ accuracy. Dataset will be provided.',
      postedDate: '2024-11-28'
    },
    {
      id: 3,
      title: 'Mobile App UI/UX Design - Fitness Tracker',
      budget: 800,
      deadline: '2 weeks',
      category: 'UI/UX Designing',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
      ownerRating: 4.7,
      description: 'Create a modern, intuitive UI/UX design for a fitness tracking mobile app. Include wireframes, high-fidelity mockups, and interactive prototype.',
      postedDate: '2024-11-27'
    },
    {
      id: 4,
      title: 'Cross-Platform Food Delivery App',
      budget: 2500,
      deadline: '5 weeks',
      category: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      ownerRating: 4.6,
      description: 'Develop a cross-platform mobile app for food delivery with real-time tracking, payment integration, and user authentication.',
      postedDate: '2024-11-26'
    },
    {
      id: 5,
      title: 'Sales Data Analysis & Visualization',
      budget: 600,
      deadline: '10 days',
      category: 'Data Analysis',
      skills: ['Python', 'Pandas', 'SQL', 'Data Visualization'],
      ownerRating: 4.8,
      description: 'Analyze 2 years of sales data, identify trends, create interactive dashboards, and provide actionable insights for business growth.',
      postedDate: '2024-11-29'
    },
    {
      id: 6,
      title: 'RESTful API for Social Media Platform',
      budget: 1800,
      deadline: '3 weeks',
      category: 'API Development',
      skills: ['Node.js', 'Express', 'REST API', 'PostgreSQL'],
      ownerRating: 4.9,
      description: 'Build a scalable RESTful API for a social media platform with user authentication, posts, comments, and real-time notifications.',
      postedDate: '2024-11-24'
    },
    {
      id: 7,
      title: 'SaaS Dashboard with Vue.js',
      budget: 1200,
      deadline: '2 weeks',
      category: 'Web Development',
      skills: ['Vue.js', 'TypeScript', 'Tailwind'],
      ownerRating: 4.7,
      description: 'Develop a responsive SaaS dashboard with data visualization, user management, and subscription handling using Vue.js 3.',
      postedDate: '2024-11-23'
    },
    {
      id: 8,
      title: 'Sentiment Analysis NLP Model',
      budget: 1900,
      deadline: '3 weeks',
      category: 'Machine Learning',
      skills: ['Python', 'Scikit-learn', 'Neural Networks', 'NLP'],
      ownerRating: 4.8,
      description: 'Create an NLP model for sentiment analysis of customer reviews. Model should classify reviews as positive, negative, or neutral.',
      postedDate: '2024-11-22'
    },
    {
      id: 9,
      title: 'Dashboard UI Design for Analytics Platform',
      budget: 650,
      deadline: '1 week',
      category: 'UI/UX Designing',
      skills: ['Adobe XD', 'Sketch', 'Prototyping'],
      ownerRating: 4.6,
      description: 'Design a clean, professional dashboard UI for an analytics platform with charts, graphs, and data tables. Dark mode included.',
      postedDate: '2024-11-21'
    },
    {
      id: 10,
      title: 'iOS Expense Tracker App',
      budget: 1400,
      deadline: '4 weeks',
      category: 'Mobile Development',
      skills: ['Swift', 'iOS', 'CoreData'],
      ownerRating: 4.9,
      description: 'Build a native iOS app for expense tracking with categories, budgets, charts, and iCloud sync functionality.',
      postedDate: '2024-11-20'
    },
    {
      id: 11,
      title: 'Customer Behavior Analysis Dashboard',
      budget: 850,
      deadline: '2 weeks',
      category: 'Data Analysis',
      skills: ['Excel', 'SQL', 'Data Visualization', 'Python'],
      ownerRating: 4.5,
      description: 'Analyze customer behavior patterns from e-commerce data and create an interactive dashboard with key metrics and insights.',
      postedDate: '2024-11-19'
    },
    {
      id: 12,
      title: 'GraphQL API for E-learning Platform',
      budget: 2100,
      deadline: '4 weeks',
      category: 'API Development',
      skills: ['GraphQL', 'Node.js', 'MongoDB', 'Apollo'],
      ownerRating: 4.8,
      description: 'Develop a GraphQL API for an e-learning platform with courses, lessons, quizzes, and student progress tracking.',
      postedDate: '2024-11-18'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Collapse states for filter sections
  const [categoryExpanded, setCategoryExpanded] = useState(true);
  const [budgetExpanded, setBudgetExpanded] = useState(true);
  const [deadlineExpanded, setDeadlineExpanded] = useState(true);
  const [skillsExpanded, setSkillsExpanded] = useState(true);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [budgetRanges, setBudgetRanges] = useState([]);
  const [deadlineRanges, setDeadlineRanges] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [sortBy, setSortBy] = useState('newest');

  const handleBudgetToggle = (value) => {
    setBudgetRanges(prev =>
      prev.includes(value) ? prev.filter(b => b !== value) : [...prev, value]
    );
  };

  const handleDeadlineToggle = (value) => {
    setDeadlineRanges(prev =>
      prev.includes(value) ? prev.filter(d => d !== value) : [...prev, value]
    );
  }

  const handleSkillToggle = (value) => {
    setSelectedSkills(prev =>
      prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value]
    )
  }

  const convertDeadlineToDays = (deadlineString) => {
    if (!deadlineString) return null;

    const [num, unit] = deadlineString.toLowerCase().split(" ");

    const value = Number(num);

    if (unit.startsWith("week")) return value * 7;
    if (unit.startsWith("day")) return value;

    return null;
  };



  const filteredProjects = projects.filter(project => {
    //Category filter
    if (selectedCategory.toLowerCase() !== "all" && project.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false;
    }

    //Budget filter
    if (budgetRanges.length > 0) {
      const projectBudget = project.budget;
      const inBudget = budgetRanges.some(range => {
        const [min, max] = range.split("-").map(Number);
        return projectBudget >= min && projectBudget <= max;
      });

      if (!inBudget) {
        return false;
      }
    }

    //Deadline filter
    if (deadlineRanges.length > 0) {
      const projectDeadline = convertDeadlineToDays(project.deadline);
      const inDeadline = deadlineRanges.some(range => {
        const [min, max] = range.split("-").map(Number);
        return projectDeadline >= min && projectDeadline <= max;
      });

      if (!inDeadline) {
        return false;
      }
    }

    // Skill filter
    if (selectedSkills.length > 0) {
      const hasSkill = selectedSkills.some(skill =>
        project.skills.includes(skill)
      );

      if (!hasSkill) return false;
    }

    // Search filter
    if (searchTerm.trim() !== "") {
      const lowerSearch = searchTerm.toLowerCase();
      const matchesTitle = project.title.toLowerCase().includes(lowerSearch);
      const matchesDesc = project.description.toLowerCase().includes(lowerSearch);
      if (!matchesTitle && !matchesDesc) return false;
    }

    return true;

  }).sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
    }
    if (sortBy === 'oldest') {
      return new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime();
    }
    if (sortBy === 'budget_low') {
      return a.budget - b.budget;
    }
    if (sortBy === 'budget_high') {
      return b.budget - a.budget;
    }

    return 0;
  });

  return (
    <div className='min-h-screen bg-background'>
      <div>
        <h1 className='text-4xl font-bold mb-2'>Browse Projects</h1>
        <p className='text-text-secondary'>Find your next opportunity from available projects</p>
      </div>

      <div className='mt-6'>
        <div className='flex gap-2 items-center'>
          <div className='relative flex-4'>
            <div className='absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary'>
              <Search className='w-5 h-5' />
            </div>
            <input type="text" placeholder='Search projects by title or description...'
              className='w-full px-10 py-3 border border-gray-300 rounded-2xl focus:border-none focus:outline-none focus:ring-2 focus:ring-primary'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className='relative flex-1'>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='px-6 py-3 border-2 border-primary rounded-2xl outline-none hover:border-primary cursor-pointer transition-colors appearance-none pr-10 text-primary'
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="budget_high">Highest Budget</option>
              <option value="budget_low">Lowest Budget</option>
            </select>
            <SortAsc className="w-5 h-5 text-primary absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className='flex mt-5'>
        <div className='flex-1 shrink-0'>
          <div className='bg-white rounded-xl shadow-md p-6 sticky top-8'>
            <div>
              <h4 className='text-xl font-semibold mb-4'>Filters</h4>
            </div>

            <div className='space-y-6'>
              {/* category filter */}
              <div className='border-b border-border pb-4'>
                <button className='flex items-center justify-between w-full mb-3 text-secondary hover:text-primary transition-colors'
                  onClick={() => setCategoryExpanded(!categoryExpanded)}
                >
                  <span className='flex items-center gap-2'>
                    <Tag className='w-4 h-4' />
                    Category
                  </span>
                  {categoryExpanded ? <ChevronUp className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}
                </button>
                {categoryExpanded && (
                  <div className='space-y-2'>
                    {categories.map((category) => (
                      <label key={category.value} className='flex items-center gap-2 cursor-pointer hover:text-primary transition-colors'>
                        <input
                          type="radio"
                          name='category'
                          value={category.value}
                          checked={selectedCategory === category.value}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className='w-4 h-4 text-primary border-border focus:ring-primary cursor-pointer'
                        />
                        <span className='text-text-secondary text-sm'>{category.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* budget filter */}
              <div className='border-b border-border pb-4'>
                <button className='flex items-center justify-between w-full mb-3 text-secondary hover:text-primary transition-colors'
                  onClick={() => setBudgetExpanded(!budgetExpanded)}
                >
                  <span className='flex items-center gap-2'>
                    <DollarSign className='w-4 h-4' />
                    Budget Range
                  </span>
                  {budgetExpanded ? <ChevronUp className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}
                </button>
                {budgetExpanded && (
                  <div className='space-y-2'>
                    {budgetOptions.map((option) => (
                      <label key={option.value} className='flex items-center gap-2 cursor-pointer hover:text-primary transition-colors'>
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={budgetRanges.includes(option.value)}
                          onChange={() => handleBudgetToggle(option.value)}
                          className='w-4 h-4 text-primary border-border focus:ring-primary cursor-pointer'
                        />
                        <span className='text-text-secondary text-sm'>{option.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* deadline filter */}
              <div className='border-b border-border pb-4'>
                <button className='flex items-center justify-between w-full mb-3 text-secondary hover:text-primary transition-colors'
                  onClick={() => setDeadlineExpanded(!deadlineExpanded)}
                >
                  <span className='flex items-center gap-2'>
                    <Clock className='w-4 h-4' />
                    Deadline
                  </span>
                  {deadlineExpanded ? <ChevronUp className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}
                </button>
                {deadlineExpanded && (
                  <div className='space-y-2'>
                    {deadlineOptions.map((option) => (
                      <label key={option.value} className='flex items-center gap-2 cursor-pointer hover:text-primary transition-colors'>
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={deadlineRanges.includes(option.value)}
                          onChange={() => handleDeadlineToggle(option.value)}
                          className='w-4 h-4 text-primary border-border focus:ring-primary cursor-pointer'
                        />
                        <span className='text-text-secondary text-sm'>{option.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* skill filter */}
              <div className='border-b border-border pb-4'>
                <button className='flex items-center justify-between w-full mb-3 text-secondary hover:text-primary transition-colors'
                  onClick={() => setSkillsExpanded(!skillsExpanded)}
                >
                  <span className='flex items-center gap-2'>
                    Required Skills
                  </span>
                  {skillsExpanded ? <ChevronUp className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}
                </button>
                {skillsExpanded && (
                  <div className='space-y-2 max-h-64 overflow-y-auto'>
                    {allSkills.map((skill) => (
                      <label key={skill} className='flex items-center gap-2 cursor-pointer hover:text-primary transition-colors'>
                        <input
                          type="checkbox"
                          value={skill}
                          checked={selectedSkills.includes(skill)}
                          onChange={() => handleSkillToggle(skill)}
                          className='w-4 h-4 text-primary border-border focus:ring-primary cursor-pointer'
                        />
                        <span className='text-text-secondary text-sm'>{skill}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='flex-3 '>
          {filteredProjects.length > 0
            ? (
              <div className='grid grid-cols-2 gap-3 pl-4'>
                {filteredProjects.map(project => (
                  <ProjectCard project={project} />
                ))}
              </div>
            ) : (
              <p>No projects found</p>
            )}
        </div>
      </div>
    </div>
  )
}

export default BrowseProjects
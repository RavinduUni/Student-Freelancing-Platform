import { Calendar, DollarSign, Plus, Tag, X } from 'lucide-react';
import React, { useState } from 'react'

const CreateProject = () => {

  const categories = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'Mobile App Development',
    'API Development',
    'Database Development',
    'Desktop Application',
    'Game Development'
  ];

  const suggestedTechnologies = [
    'React', 'Vue.js', 'Angular', 'Next.js', 'Svelte', 'Node.js',
    'Express', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'ASP.NET',
    'TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP',
    'MongoDB', 'PostgreSQL', 'MySQL', 'GCP', 'Git'
  ];

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    deadline: '',
    technologies: [],
    category: '',
    requirements: [],
    deliverables: []
  });


  const [currentRequirement, setCurrentRequirement] = useState('');
  const [currentDeliverable, setCurrentDeliverable] = useState('');

  const addRequirement = () => {
    if (currentRequirement.trim()) {
      setFormData(prev => ({
        ...prev, requirements: [...prev.requirements, currentRequirement.trim()]
      }))
      setCurrentRequirement('');
    }
  }

  const removeRequirement = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, index) => index !== indexToRemove)
    }))
  }

  const addDeliverable = () => {
    if (currentDeliverable.trim()) {
      setFormData(prev => ({
        ...prev, deliverables: [...prev.deliverables, currentDeliverable.trim()]
      }))
      setCurrentDeliverable('');
    }
  }

  const removeDeliverable = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      deliverables: prev.deliverables.filter((_, index) => index !== indexToRemove)
    }))
  }


  return (
    <div>
      <div>
        <h1 className='font-bold text-4xl'>Create New Project</h1>
        <p className='text-text-secondary mt-2'>Post a new micro-project and find talented students</p>
      </div>

      <p className='text-2xl font-semibold mt-8 mb-2 ml-2'>Project Details</p>

      <form className='flex flex-col gap-3'>
        <label>
          <p className='my-2 ml-2'>Project Title</p>
          <input
            type="text"
            placeholder='e.g., React Dashboard Development'
            className='w-full px-4 py-3 border-2 border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            required
          />
        </label>

        <label>
          <p className='my-2 ml-2'>Category</p>
          <select
            className='w-full px-4 py-3 border-2 border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>

        <label>
          <p className='my-2 ml-2'>Project Description</p>
          <textarea
            placeholder='Describe your project'
            rows={6}
            className='w-full px-4 py-3 border-2 border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            required
          />
        </label>

        <div className='flex items-center gap-3'>
          <label className='flex-1'>
            <p className='my-2 ml-2'>Budget</p>
            <div className='relative'>
              <DollarSign className='text-text-secondary w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2' />
              <input
                type="number"
                placeholder='500'
                className='w-full px-8 py-3 border-2 border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                value={formData.budget}
                onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                required
              />
            </div>
          </label>

          <label className='flex-1'>
            <p className='my-2 ml-2'>Deadline</p>
            <div className='relative'>
              <Calendar className='text-text-secondary w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2' />
              <input
                type="date"
                placeholder='e.g., React Dashboard Development'
                className='w-full px-8 py-3 border-2 border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                value={formData.deadline}
                onChange={(e) => setFormData(prev => ({ ...prev, deadline: e.target.value }))}
                required
              />
            </div>
          </label>
        </div>

        <div>
          <label>
            <p className='my-2 ml-2'>Technologies (comma-separated)</p>
            <div className='relative'>
              <Tag className='text-text-secondary w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2' />
              <input
                type="text"
                placeholder="React, TypeScript, Tailwind CSS"
                className='w-full px-8 py-3 border-2 border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                value={formData.technologies.join(', ')}
                onChange={(e) => {
                  const value = e.target.value;
                  const techArray = value
                    .split(',')
                    .map(t => t.trim())
                    .filter(Boolean);

                  setFormData(prev => ({
                    ...prev,
                    technologies: techArray
                  }))
                }}
                required
              />
            </div>
          </label>

          <div>
            <p className='my-2 ml-2 text-text-secondary'>Suggested Technologies:</p>

            <div>
              {suggestedTechnologies.map((tech) => (
                <button
                  key={tech}
                  type='button'
                  className='border border-gray-300 px-3 py-1 rounded-full m-1 hover:text-primary hover:bg-blue-50 hover:border-primary transition-colors duration-300 cursor-pointer'
                  onClick={() => {
                    setFormData(prev => {
                      if (prev.technologies.includes(tech)) {
                        return prev;
                      }

                      return {
                        ...prev,
                        technologies: [...prev.technologies, tech]
                      }
                    })
                  }}
                >
                  + {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className='my-2 ml-2'>Project Requirements</p>

          <div className='flex items-center gap-2'>
            <input
              type="text"
              placeholder="e.g, Experience with React and TypeScript"
              className='w-full px-4 py-3 border-2 border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              value={currentRequirement}
              onChange={(e) => setCurrentRequirement(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addRequirement();
                }
              }}
            />

            <button type='button' onClick={addRequirement} className='bg-primary text-white py-3.5 px-6 rounded-2xl cursor-pointer'>
              <Plus />
            </button>
          </div>

          {formData.requirements.length > 0 && (
            <div>
              <p className='my-2 ml-2 text-text-secondary'>Requirements List :</p>
              <ul className='max-h-[200px] overflow-y-auto space-y-2 border border-orange-400 bg-orange-50 p-4 rounded-2xl'>
                {formData.requirements.map((req, index) => (
                  <li key={index} className='flex justify-between items-center border border-orange-400 mt-2 py-2 px-3 rounded-xl'>
                    <div className='flex items-center gap-3'>
                      <span>•</span>
                      <p className='text-orange-400'>{req}</p>
                    </div>
                    <button
                      type='button'
                      className='bg-red-400 text-white text-sm rounded p-1 cursor-pointer hover:bg-red-500'
                      onClick={() => removeRequirement(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <p className='my-2 ml-2'>Deliverables</p>

          <div className='flex items-center gap-2'>
            <input
              type="text"
              placeholder="e.g, Experience with React and TypeScript"
              className='w-full px-4 py-3 border-2 border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              value={currentDeliverable}
              onChange={(e) => setCurrentDeliverable(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addDeliverable();
                }
              }}
            />

            <button type='button' onClick={addDeliverable} className='bg-primary text-white py-3.5 px-6 rounded-2xl cursor-pointer'>
              <Plus />
            </button>
          </div>

          {formData.deliverables.length > 0 && (
            <div>
              <p className='my-2 ml-2 text-text-secondary'>Deliverables List :</p>
              <ul className='max-h-[200px] overflow-y-auto space-y-2 border border-purple-400 bg-purple-50 p-4 rounded-2xl'>
                {formData.deliverables.map((req, index) => (
                  <li key={index} className='flex justify-between items-center border border-purple-400 mt-2 py-2 px-3 rounded-xl'>
                    <div className='flex items-center gap-3'>
                      <span>•</span>
                      <p className='text-purple-400'>{req}</p>
                    </div>
                    <button
                      type='button'
                      className='bg-red-400 text-white text-sm rounded p-1 cursor-pointer hover:bg-red-500'
                      onClick={() => removeDeliverable(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>



        <div className='mt-2 bg-blue-50 border border-primary rounded-2xl p-4 flex flex-col gap-3 text-text-secondary'>
          <p className='font-semibold text-2xl text-black'>Project Preview</p>
          <p><strong>Title: </strong>{formData.title || 'Not specified'}</p>
          <p><strong>Category: </strong>{formData.category || 'Not specified'}</p>
          <p><strong>Budget: </strong>{formData.budget || 'Not specified'}</p>
          <p><strong>Deadline: </strong>{formData.deadline || 'Not specified'}</p>
          <p><strong>Technologies: </strong>{formData.technologies.length > 0 ? formData.technologies.join(', ') : 'Not specified'}</p>
        </div>

        <div className='flex gap-2 my-2'>
          <button className='flex-1 border-2 border-primary py-3 text-primary rounded-2xl hover:bg-primary hover:text-white transition-colors duration-300'>
            Cancel
          </button>

          <button className='flex-1 border-2 border-primary bg-primary py-3 text-white rounded-2xl hover:bg-blue-600 transition-colors duration-300'>
            Post Project
          </button>
        </div>
      </form>

    </div>
  )
}

export default CreateProject
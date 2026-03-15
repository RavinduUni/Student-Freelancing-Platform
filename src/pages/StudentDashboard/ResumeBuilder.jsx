import { Briefcase, FileText, GraduationCap, Loader2, Plus, Sparkles, Trash2, User } from 'lucide-react';
import React, { useRef, useState } from 'react'

const uid = () => Math.random().toString(36).slice(2, 8);

const enhanceWithAI = async (fieldLabel, currentValue) => {

}

const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 bg-blue-50 flex items-center justify-center rounded-xl">
            <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
)

// ── field input ──
const Field = ({ label, value, onChange, placeholder, multiline }) => (
    <div className='flex flex-col gap-1'>
        <label className='text-xs font-medium text-gray-500 uppercase tracking-wide'>{label}</label>
        {multiline
            ? <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={3}
                className="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
            : <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
                className="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
        }
    </div>
)

const EnhanceBtn = ({ loading, onClick }) => (
    <button
        onClick={onClick}
        disabled={loading}
        className='flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-primary border border-blue-200 hover:bg-blue-100 transition-colors disabled:opacity-50 cursor-pointer'
    >
        {loading ? <Loader2 className='w-3.5 h-3.5 animate-spin' /> : <Sparkles className='w-3.5 h-3.5' />}
        {loading ? 'Enhancing...' : 'Enhance with AI'}
    </button>
)

const ResumeBuilder = () => {

    // ── form state ──
    const [personal, setPersonal] = useState({
        name: '', title: '', email: '', phone: '', location: '', summary: ''
    });
    const [experiences, setExperiences] = useState([
        { id: uid(), role: '', company: '', period: '', description: '' }
    ]);
    const [education, setEducation] = useState([
        { id: uid(), degree: '', institution: '', period: '', gpa: '' }
    ]);
    const [skills, setSkills] = useState(['']);
    const [skillInput, setSkillInput] = useState('');

    // ── AI loading states ──
    const [aiLoading, setAiLoading] = useState({});
    const setLoading = (key, val) => setAiLoading(p => ({ ...p, [key]: val }));

    // ── AI enhance handlers ──
    const enhanceField = async (key, value, setter) => {
        if (!value.trim()) return;
        setLoading(key, true);
        try {
            const enhanced = await enhanceWithAI(key, value);
            setter(enhanced);
        } finally {
            setLoading(key, false);
        }
    };

    const enhanceExpDesc = async (id, value) => {
        if (!value.trim()) return;
        setLoading(`exp-${id}`, true);
        try {
            const enhanced = await enhanceWithAI('job description', value);
            setExperiences(prev => prev.map(e => e.id === id ? { ...e, description: enhanced } : e));
        } finally {
            setLoading(`exp-${id}`, false);
        }
    };

    // ── experience helpers ──
    const addExp = () => setExperiences(p => [...p, { id: uid(), role: '', company: '', period: '', description: '' }]);
    const removeExp = (id) => setExperiences(p => p.filter(e => e.id !== id));
    const updateExp = (id, field, val) => setExperiences(p => p.map(e => e.id === id ? { ...e, [field]: val } : e));

    // ── education helpers ──
    const addEdu = () => setEducation(p => [...p, { id: uid(), degree: '', institution: '', period: '', gpa: '' }]);
    const removeEdu = (id) => setEducation(p => p.filter(e => e.id !== id));
    const updateEdu = (id, field, val) => setEducation(p => p.map(e => e.id === id ? { ...e, [field]: val } : e));

    // ── skills helpers ──
    const addSkill = () => {
        const trimmed = skillInput.trim();
        if (trimmed && !skills.includes(trimmed)) {
            setSkills(p => [...p.filter(Boolean), trimmed]);
            setSkillInput('');
        }
    };

    const removeSkill = (skill) => setSkills(p => p.filter(s => s !== skill));

    // ── print / download ──
    const previewRef = useRef(null);

    const handleDownload = () => {
        const printContents = previewRef.current.innerHTML;
        const win = window.open('', '_blank');
        win.document.write(`
      <html><head><title>${personal.name || 'Resume'}</title>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: 'Georgia', serif; color: #1a1a2e; background: #fff; }
        .resume { max-width: 800px; margin: 0 auto; padding: 40px; }
        .header { border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 24px; }
        .name { font-size: 2rem; font-weight: 700; color: #1a1a2e; }
        .title { font-size: 1rem; color: #2563eb; margin-top: 4px; }
        .contact { display:flex; gap:20px; margin-top:10px; font-size:0.8rem; color:#555; flex-wrap:wrap; }
        .section { margin-bottom: 22px; }
        .section-title { font-size:1rem; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#2563eb; border-bottom:1px solid #dbeafe; padding-bottom:4px; margin-bottom:12px; }
        .summary { font-size:0.875rem; color:#444; line-height:1.6; }
        .entry { margin-bottom:14px; }
        .entry-header { display:flex; justify-content:space-between; align-items:baseline; }
        .entry-title { font-weight:600; font-size:0.95rem; }
        .entry-sub { color:#555; font-size:0.85rem; }
        .entry-period { font-size:0.8rem; color:#888; }
        .entry-desc { font-size:0.85rem; color:#444; line-height:1.6; margin-top:4px; }
        .skills { display:flex; flex-wrap:wrap; gap:8px; }
        .skill { background:#dbeafe; color:#1d4ed8; font-size:0.8rem; padding:3px 10px; border-radius:20px; }
        @media print { body { -webkit-print-color-adjust: exact; } }
      </style></head>
      <body>${printContents}</body></html>
    `);
        win.document.close();
        win.focus();
        setTimeout(() => {
            win.print();
            win.close();
        }, 500);
    }


    return (
        <div className='min-h-screen bg-background'>
            {/* Header */}
            <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-blue-50 flex items-center justify-center rounded-xl'>
                        <FileText className='w-5 h-5 text-primary' />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-gray-900'>Resume Builder</h1>
                        <p className='text-sm text-gray-500'>Build and download your professional resume</p>
                    </div>
                </div>
                <button
                    onClick={handleDownload}
                    className='flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors font-medium text-sm cursor-pointer'
                >
                    Download PDF
                </button>
            </div>

            <div className='grid grid-cols-2 gap-5 items-start'>

                {/* left editor */}
                <div className='col-span-1 flex flex-col gap-4'>

                    {/* Personal Info */}
                    <div className="bg-white rounded-2xl shadow p-5">
                        <SectionHeader icon={User} title="Personal Information" />
                        <div className="grid grid-cols-2 gap-3">
                            <Field label="Full Name" value={personal.name} onChange={v => setPersonal(p => ({ ...p, name: v }))} placeholder="Ravindu Sachintha" />
                            <Field label="Job Title" value={personal.title} onChange={v => setPersonal(p => ({ ...p, title: v }))} placeholder="Full Stack Developer" />
                            <Field label="Email" value={personal.email} onChange={v => setPersonal(p => ({ ...p, email: v }))} placeholder="ravindu@email.com" />
                            <Field label="Phone" value={personal.phone} onChange={v => setPersonal(p => ({ ...p, phone: v }))} placeholder="+1 555 000 0000" />
                            <div className="col-span-2">
                                <Field label="Location" value={personal.location} onChange={v => setPersonal(p => ({ ...p, location: v }))} placeholder="Colombo" />
                            </div>
                            <div className="col-span-2 flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Professional Summary</label>
                                    <EnhanceBtn
                                        loading={aiLoading['summary']}
                                        onClick={() => enhanceField('summary', personal.summary, v => setPersonal(p => ({ ...p, summary: v })))}
                                    />
                                </div>
                                <textarea
                                    value={personal.summary}
                                    onChange={e => setPersonal(p => ({ ...p, summary: e.target.value }))}
                                    placeholder="Brief overview of your professional background…" rows={3}
                                    className="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className='bg-white rounded-2xl shadow p-5'>
                        <SectionHeader icon={Briefcase} title={'Work Experience'} />
                        <div className='flex flex-col gap-5'>
                            {experiences.map((exp) => (
                                <div key={exp.id} className='bg-background border border-border rounded-2xl p-4 relative'>
                                    {experiences.length > 1 && (
                                        <button
                                            onClick={() => removeExp(exp.id)}
                                            className='absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors cursor-pointer'
                                        >
                                            <Trash2 className='w-4 h-4' />
                                        </button>
                                    )}

                                    <div className='grid grid-cols-2 gap-3'>
                                        <Field label="Job Title" value={exp.role} onChange={v => updateExp(exp.id, 'role', v)} placeholder="Frontend Developer" />
                                        <Field label="Company" value={exp.company} onChange={v => updateExp(exp.id, 'company', v)} placeholder="TechCorp Inc." />
                                        <div className="col-span-2">
                                            <Field label="Period" value={exp.period} onChange={v => updateExp(exp.id, 'period', v)} placeholder="Jan 2024 – Present" />
                                        </div>
                                        <div className='col-span-2 flex flex-col gap-1'>
                                            <div className='flex items-center justify-between'>
                                                <label className='text-xs font-medium text-gray-500 uppercase tracking-wide'>Description</label>
                                                <EnhanceBtn
                                                    loading={aiLoading[`exp-${exp.id}`]}
                                                    onClick={() => enhanceExpDesc(exp.id, exp.description)}
                                                />
                                            </div>
                                            <textarea
                                                value={exp.description}
                                                onChange={e => updateExp(exp.id, 'description', e.target.value)}
                                                placeholder='Describe your responsibilities and achievements…'
                                                rows={3}
                                                className='border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 placeholder-gray-400 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none focus:border-transparent'
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button
                                onClick={addExp}
                                className='flex items-center gap-2 text-sm text-blue-600 border-2 border-dashed border-blue-200 rounded-xl py-2.5 justify-center hover:bg-blue-50 transition-colors cursor-pointer'
                            >
                                <Plus className='w-4 h-4' /> Add Experience
                            </button>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="bg-white rounded-2xl shadow p-5">
                        <SectionHeader icon={GraduationCap} title="Education" />
                        <div className="flex flex-col gap-4">
                            {education.map((edu) => (
                                <div key={edu.id} className="bg-background border border-border rounded-2xl p-4 relative">
                                    {education.length > 1 && (
                                        <button onClick={() => removeEdu(edu.id)}
                                            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )}
                                    <div className="grid grid-cols-2 gap-3">
                                        <Field label="Degree" value={edu.degree} onChange={v => updateEdu(edu.id, 'degree', v)} placeholder="B.Sc. Computer Science" />
                                        <Field label="Institution" value={edu.institution} onChange={v => updateEdu(edu.id, 'institution', v)} placeholder="MIT" />
                                        <Field label="Period" value={edu.period} onChange={v => updateEdu(edu.id, 'period', v)} placeholder="2020 – 2024" />
                                        <Field label="GPA (optional)" value={edu.gpa} onChange={v => updateEdu(edu.id, 'gpa', v)} placeholder="3.9 / 4.0" />
                                    </div>
                                </div>
                            ))}
                            <button onClick={addEdu}
                                className="flex items-center gap-2 text-sm text-blue-600 border-2 border-dashed border-blue-200 rounded-xl py-2.5 justify-center hover:bg-blue-50 transition-colors cursor-pointer">
                                <Plus className="w-4 h-4" /> Add Education
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResumeBuilder
import { ArrowLeft, Building, FileText, GraduationCap, Lock, Mail, Upload, User, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate, useSearchParams } from 'react-router-dom'

const AuthPage = () => {
    const [searchParams] = useSearchParams();

    const type = searchParams.get("type") || "student";
    const mode = searchParams.get("mode") || "register";

    const titles = {
        student: {
            login: "Student Login",
            register: "Create Student Account"
        },
        recruiter: {
            login: "Recruiter Login",
            register: "Create Recruiter Account"
        }
    };

    const subtitle = {
        student: "Student Portal",
        recruiter: "Recruiter Portal"
    };

    const buttonText = mode === "login" ? "Login" : "Create Account";

    const navigate = useNavigate();

    const [file, setFile] = useState('');

    const inputRef = useRef(null);

    return (
        <div className='bg-background min-h-screen flex items-center justify-center p-4'>
            <div>
                <button onClick={() => navigate('/')} className='flex items-center gap-2 text-text-secondary mb-4 cursor-pointer'>
                    <ArrowLeft className='w-5 h-5' />
                    Back to Home
                </button>

                <div className='bg-white w-lg max-w-lg p-5 rounded-xl shadow'>
                    <div className='flex flex-col items-center gap-2'>
                        <img src={assets.logo} alt="Insider Jobs" className='cursor-pointer' />
                        <h2 className="text-4xl font-bold mt-2">
                            {mode === 'login' ? 'Login' : 'Create Account'}
                        </h2>
                        <p className='text-text-secondary'>{titles[type][mode]}</p>
                    </div>

                    <form className='flex flex-col gap-3 mt-8'>
                        {mode === 'register' && (
                            <div>
                                <label>Full Name</label>
                                <div className='flex items-center relative'>
                                    <User className='w-5 h-5 top-5.5 text-text-secondary absolute left-3' />
                                    <input
                                        className='w-full pl-10 py-3 mt-2 border border-border rounded-xl focus:outline-none focus:ring focus:ring-primary focus:border-transparent'
                                        type="text"
                                        placeholder='Enter your name'
                                    />
                                </div>
                            </div>
                        )}


                        {type === 'student' && mode === 'register' && (
                            <>
                                <div>
                                    <label>University</label>
                                    <div className='flex items-center relative'>
                                        <GraduationCap className='w-5 h-5 top-5.5 text-text-secondary absolute left-3' />
                                        <input
                                            className='w-full pl-10 py-3 mt-2 border border-border rounded-xl focus:outline-none focus:ring focus:ring-primary focus:border-transparent'
                                            type="text"
                                            placeholder='Your university'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label>Degree / Major</label>
                                    <div className='flex items-center relative'>
                                        <input
                                            className='w-full pl-3 py-3 mt-2 border border-border rounded-xl focus:outline-none focus:ring focus:ring-primary focus:border-transparent'
                                            type="text"
                                            placeholder='e.g., Computer Science'
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {type === 'recruiter' && mode === 'register' && (
                            <div>
                                <label>Company Name</label>
                                <div className='flex items-center relative'>
                                    <Building className='w-5 h-5 top-5.5 text-text-secondary absolute left-3' />
                                    <input
                                        className='w-full pl-10 py-3 mt-2 border border-border rounded-xl focus:outline-none focus:ring focus:ring-primary focus:border-transparent'
                                        type="text"
                                        placeholder='Your Company'
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label>Email</label>
                            <div className='flex items-center relative'>
                                <Mail className='w-5 h-5 top-5.5 text-text-secondary absolute left-3' />
                                <input
                                    className='w-full pl-10 py-3 mt-2 border border-border rounded-xl focus:outline-none focus:ring focus:ring-primary focus:border-transparent'
                                    type="email"
                                    placeholder='your@email.com'
                                />
                            </div>
                        </div>

                        <div>
                            <label>Password</label>
                            <div className='flex items-center relative'>
                                <Lock className='w-5 h-5 top-5.5 text-text-secondary absolute left-3' />
                                <input
                                    className='w-full pl-10 py-3 mt-2 border border-border rounded-xl focus:outline-none focus:ring focus:ring-primary focus:border-transparent'
                                    type="password"
                                    placeholder='••••••••'
                                />
                            </div>
                        </div>

                        <div>
                            {mode === 'register' && (
                                <>
                                    <label>{type === 'student' && mode === 'register' ? 'Upload Resume' : 'Company logo'}</label>
                                    {!file ? (
                                        <div
                                            onClick={() => inputRef.current?.click()}
                                            className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                                        >
                                            <Upload className="w-12 h-12 mx-auto mb-3 text-text-secondary" />
                                            <p className="text-secondary mb-1">
                                                Click to upload or drag and drop
                                            </p>
                                            {
                                                type === 'student' && mode === 'register'
                                                    ? (
                                                        <>
                                                            <p className="text-text-secondary">
                                                                .pdf,.docx (max 10MB)
                                                            </p>
                                                            <input
                                                                ref={inputRef}
                                                                type="file"
                                                                accept='.pdf,.docx'
                                                                className="hidden"
                                                                onChange={(e) => setFile(e.target.files[0])}
                                                            />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <p className="text-text-secondary">
                                                                .png,.jpg,.jpeg (max 10MB)
                                                            </p>
                                                            <input
                                                                ref={inputRef}
                                                                type="file"
                                                                accept='.png,.jpg,.jpeg'
                                                                className="hidden"
                                                                onChange={(e) => setFile(e.target.files[0])}
                                                            />
                                                        </>
                                                    )
                                            }
                                        </div>
                                    ) : (
                                        <div className="border border-border rounded-lg p-4 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                                    <FileText className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="text-secondary">{file.name}</p>
                                                    <p className="text-text-secondary">
                                                        {(file.size / 1024).toFixed(2)} KB
                                                    </p>
                                                </div>
                                            </div>
                                            <button onClick={() => setFile('')} className="text-error hover:bg-red-50 p-2 rounded-lg transition-colors" >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}
                                </>
                            )}

                        </div>

                        <button className='bg-primary text-white py-3 rounded-xl mt-2'>{mode === 'register' ? 'Create Account' : 'Login'}</button>

                        <div className='flex items-center justify-center gap-2'>
                            <p className='text-text-secondary'>{mode === 'register' ? 'Already have an account?' : "Dont have an account?"} </p>
                            <button
                                type="button"
                                className="text-primary cursor-pointer"
                                onClick={() =>
                                    navigate(
                                        `/auth?type=${type}&mode=${mode === 'register' ? 'login' : 'register'}`
                                    )
                                }
                            >
                                {mode === 'register' ? 'Login' : 'Register'}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthPage
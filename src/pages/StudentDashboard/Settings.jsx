import { Bell, CreditCard, Edit, SaveIcon, Shield, UploadIcon, User, X } from 'lucide-react'
import React, { useRef, useState } from 'react'

const Settings = () => {

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'account', label: 'Account', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield }
  ]

  const [activeTab, setActiveTab] = useState('profile');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingNotifications, setIsEditingNotifications] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const fileInputRef = useRef(null);

  const [profileData, setProfileData] = useState({
    fullName: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    phone: '+1 (555) 123-4567',
    university: 'Tech University',
    major: 'Computer Science',
    graduationYear: '2025',
    bio: 'Full-stack developer with experience in React, Node.js, and cloud technologies. Passionate about building innovative solutions.',
    skills: ['React', 'Node.js', 'Python', 'UI/UX Design', 'Cloud Computing'],
    portfolio: 'https://alexjohnson.dev',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    github: 'https://github.com/alexjohnson'
  });

  const [notifications, setNotifications] = useState({
    emailNewProjects: true,
    emailApplications: true,
    emailPayments: true,
    emailNDA: true,
    pushNewProjects: false,
    pushApplications: true,
    pushPayments: true,
    pushNDA: true
  });

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB');
        return;
      }

      // Check file type
      if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
        alert('Only JPG, PNG, or GIF files are allowed');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const [tempProfileData, setTempProfileData] = useState(profileData);
  const [tempProfilePhoto, setTempProfilePhoto] = useState(profilePhoto);

  const handleUpdateProfile = () => {
    setTempProfileData(profileData);
    setIsEditingProfile(true);
  }

  const handleSaveChanges = () => {
    setProfileData(tempProfileData);
    setProfilePhoto(tempProfilePhoto);
    setIsEditingProfile(false);
  }

  const handleCancelEdit = () => {
    setTempProfileData(profileData);
    setIsEditingProfile(false);
    setTempProfilePhoto(profilePhoto);
  };


  const [tempNotificationData, setTempNotificationData] = useState(notifications);

  const handleSaveNotifications = () => {
    setNotifications(tempNotificationData);
    setIsEditingNotifications(false);
  }

  const handleCancelNotifications = () => {
    setTempNotificationData(notifications);
    setIsEditingNotifications(false);
  }

  const handleUpdateNotifications = () => {
    setIsEditingNotifications(true);
  }


  const renderProfileTab = () => (
    <div className='px-3'>
      <h2 className='text-2xl font-semibold mb-8'>Personal Information</h2>

      <div className='flex items-center gap-8'>
        {isEditingProfile ? (
          tempProfilePhoto ? (
            <img className='w-24 h-24 flex items-center justify-center object-cover border-4 border-blue-100 rounded-full' src={tempProfilePhoto} alt="Profile" />
          ) : (
            <div className='w-24 h-24 bg-primary text-white text-3xl flex items-center justify-center rounded-full'>
              {tempProfileData.fullName.slice(0, 2).toUpperCase()}
            </div>
          )
        ) : (
          profilePhoto ? (
            <img className='w-24 h-24 flex items-center justify-center object-cover border-4 border-blue-100 rounded-full' src={profilePhoto} alt="Profile" />
          ) : (
            <div className='w-24 h-24 bg-primary text-white text-3xl flex items-center justify-center rounded-full'>
              {profileData.fullName.slice(0, 2).toUpperCase()}
            </div>
          )
        )}
        <div>
          <input
            type="file"
            ref={fileInputRef}
            accept='image/jpeg,image/jpg,image/png,image/gif'
            onChange={handlePhotoUpload}
            className='hidden'
          />
          <button
            className='flex items-center gap-2 text-primary border-2 border-primary px-4 py-2 rounded-2xl mb-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={!isEditingProfile}
            onClick={() => fileInputRef.current?.click()}
          >
            <UploadIcon className='w-4 h-4' />
            Upload Photo
          </button>
          <p className='text-text-secondary'>JPG, PNG or GIF (Max 2MB)</p>
        </div>
      </div>

      <hr className='border-border my-8' />

      <div className='grid grid-cols-2 gap-4'>
        <div className='w-full flex flex-col gap-3'>
          <label>Full Name</label>
          <input
            type="text"
            className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={isEditingProfile ? tempProfileData.fullName : profileData.fullName}
            onChange={(e) => setTempProfileData({ ...tempProfileData, fullName: e.target.value })}
            disabled={!isEditingProfile}
          />
        </div>

        <div className='w-full flex flex-col gap-3'>
          <label>Email</label>
          <input
            type="email"
            className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={isEditingProfile ? tempProfileData.email : profileData.email}
            onChange={(e) => setTempProfileData({ ...tempProfileData, email: e.target.value })}
            disabled={!isEditingProfile}
          />
        </div>

        <div className='w-full flex flex-col gap-3'>
          <label>Phone Number</label>
          <input
            type='text'
            className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={isEditingProfile ? tempProfileData.phone : profileData.phone}
            onChange={(e) => setTempProfileData({ ...tempProfileData, phone: e.target.value })}
            disabled={!isEditingProfile}
          />
        </div>

        <div className='w-full flex flex-col gap-3'>
          <label>University</label>
          <input
            type="text"
            className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={isEditingProfile ? tempProfileData.university : profileData.university}
            onChange={(e) => setTempProfileData({ ...tempProfileData, university: e.target.value })}
            disabled={!isEditingProfile}
          />
        </div>

        <div className='w-full flex flex-col gap-3'>
          <label>Major</label>
          <input
            type="text"
            className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={isEditingProfile ? tempProfileData.major : profileData.major}
            onChange={(e) => setTempProfileData({ ...tempProfileData, major: e.target.value })}
            disabled={!isEditingProfile}
          />
        </div>

        <div className='w-full flex flex-col gap-3'>
          <label>Graduation Year</label>
          <input
            type="text"
            className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={isEditingProfile ? tempProfileData.graduationYear : profileData.graduationYear}
            onChange={(e) => setTempProfileData({ ...tempProfileData, graduationYear: e.target.value })}
            disabled={!isEditingProfile}
          />
        </div>

        <div className='w-full col-span-2 flex flex-col gap-3'>
          <label>Bio</label>
          <textarea
            rows={4}
            className='w-full px-4 py-3 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100'
            value={isEditingProfile ? tempProfileData.bio : profileData.bio}
            onChange={(e) => setTempProfileData({ ...tempProfileData, bio: e.target.value })}
            disabled={!isEditingProfile}
          />
        </div>
      </div>

      <div className='my-8'>
        <h2 className='text-2xl font-semibold mb-5'>Skills and Expertise</h2>
        <div className='flex flex-wrap gap-2 items-center w-full'>
          {(isEditingProfile ? tempProfileData.skills : profileData.skills).map((skill, index) => (
            <span className='bg-blue-50 text-primary py-1 px-3 rounded-2xl flex items-center gap-2' key={index}>
              {skill}
              {isEditingProfile && (
                <button
                  onClick={() => {
                    setTempProfileData(prev => ({
                      ...prev, skills: prev.skills.filter((_, i) => i !== index)
                    }))
                  }}
                >
                  <X className='w-4 h-4 text-primary hover:text-red-500' />
                </button>
              )}
            </span>
          ))}
        </div>
        {isEditingProfile && (
          <input
            type="text"
            placeholder='Add a new skill (press Enter)'
            className='w-full mt-5 px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            disabled={!isEditingProfile}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                const newSkill = e.target.value.trim();
                setTempProfileData(prev => ({
                  ...prev, skills: [...prev.skills, newSkill]
                }));
                e.target.value = '';
              }
            }}
          />
        )}
      </div>

      <div className='mt-3'>
        <h2 className='text-2xl font-semibold mb-5'>Professional Links</h2>

        <div className='w-full flex flex-col gap-3 mb-3'>
          <label>Protfolio Website</label>
          <input
            type="text"
            className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={isEditingProfile ? tempProfileData.portfolio : profileData.portfolio}
            onChange={(e) => setTempProfileData({ ...tempProfileData, portfolio: e.target.value })}
            disabled={!isEditingProfile}
          />
        </div>

        <div className='w-full flex flex-col gap-3 mb-3'>
          <label>LinkedIn Profile</label>
          <input
            type="text"
            className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={isEditingProfile ? tempProfileData.linkedin : profileData.linkedin}
            onChange={(e) => setTempProfileData({ ...tempProfileData, linkedin: e.target.value })}
            disabled={!isEditingProfile}
          />
        </div>

        <div className='w-full flex flex-col gap-3'>
          <label>GitHub Profile</label>
          <input
            type="text"
            className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            value={isEditingProfile ? tempProfileData.github : profileData.github}
            onChange={(e) => setTempProfileData({ ...tempProfileData, github: e.target.value })}
            disabled={!isEditingProfile}
          />
        </div>
      </div>

      <div className='flex items-center justify-end gap-5 mt-5'>
        {!isEditingProfile ? (

          <button className='flex items-center gap-2 text-primary border-2 border-primary px-5 py-3 rounded-2xl cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300'
            onClick={handleUpdateProfile}
          >
            <Edit className='w-5 h-5' />
            Update Profile
          </button>

        ) : (
          <>
            <button className='flex items-center gap-2 text-primary border-2 border-primary px-5 py-3 rounded-2xl cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300'
              onClick={handleCancelEdit}
            >
              <X className='w-5 h-5' />
              Cancel
            </button>

            <button className='flex items-center gap-2 text-white bg-primary border-2 border-primary px-5 py-3 rounded-2xl hover:bg-blue-600 cursor-pointer'
              onClick={handleSaveChanges}
            >
              <SaveIcon className='w-5 h-5' />
              Save Changes
            </button>
          </>
        )}
      </div>
    </div >
  )

  const renderNotificationsTab = () => (
    <div className="px-3">
      <h2 className="text-2xl font-semibold mb-8">Email Notifications</h2>

      <div className="flex flex-col gap-6">
        {[
          {
            key: "emailNewProjects",
            label: "New Projects",
            desc: "Get notified when new projects matching your skills are posted",
          },
          {
            key: "emailApplications",
            label: "Application Updates",
            desc: "Receive updates on your project applications",
          },
          {
            key: "emailPayments",
            label: "Payment Updates",
            desc: "Get notified about payments and earnings",
          },
          {
            key: "emailNDA",
            label: "NDA Requests",
            desc: "Receive notifications for new NDA requests",
          },
        ].map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between  p-4 rounded-2xl border border-border"
          >
            {/* Text */}
            <div>
              <p>{item.label}</p>
              <p className="text-text-secondary mt-2">{item.desc}</p>
            </div>

            {/* Toggle */}
            {isEditingNotifications ? (
              <label className="cursor-pointer flex items-center">
                <input type="checkbox"
                  className='hidden'
                  checked={tempNotificationData[item.key]}
                  onChange={(e) => {
                    setTempNotificationData({
                      ...tempNotificationData, [item.key]: e.target.checked
                    })
                  }}
                />

                <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-all duration-300 ${tempNotificationData[item.key] ? 'bg-primary' : 'bg-gray-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-all duration-300 ${tempNotificationData[item.key] ? 'translate-x-6' : ''}`} />
                </div>
              </label>
            ) : (
              <label className="cursor-pointer flex items-center opacity-60 pointer-events-none">
                <input type="checkbox"
                  className='hidden'
                  disabled
                  checked={notifications[item.key]}

                />

                <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-all duration-300 ${notifications[item.key] ? 'bg-primary' : 'bg-gray-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-all duration-300 ${notifications[item.key] ? 'translate-x-6' : ''}`} />
                </div>
              </label>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold my-8">Push Notifications</h2>

      <div className='flex flex-col gap-6'>
        {[
          { key: 'pushNewProjects', label: 'New Projects', desc: 'Browser notifications for new projects' },
          { key: 'pushApplications', label: 'Application Updates', desc: 'Browser notifications for application updates' },
          { key: 'pushPayments', label: 'Payment Updates', desc: 'Browser notifications for payments' },
          { key: 'pushNDA', label: 'NDA Requests', desc: 'Browser notifications for NDA requests' }
        ].map((item) => (
          <div key={item.key} className='flex items-center justify-between p-4 rounded-2xl border border-border'>
            <div>
              <p>{item.label}</p>
              <p className="text-text-secondary mt-2">{item.desc}</p>
            </div>

            {isEditingNotifications ? (
              <label className="cursor-pointer flex items-center">
                <input type="checkbox"
                  className='hidden'
                  checked={tempNotificationData[item.key]}
                  onChange={(e) => {
                    setTempNotificationData({
                      ...tempNotificationData, [item.key]: e.target.checked
                    })
                  }}
                />

                <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-all duration-300 ${tempNotificationData[item.key] ? 'bg-primary' : 'bg-gray-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-all duration-300 ${tempNotificationData[item.key] ? 'translate-x-6' : ''}`} />
                </div>
              </label>
            ) : (
              <label className="cursor-pointer flex items-center opacity-60 pointer-events-none">
                <input type="checkbox"
                  className='hidden'
                  disabled
                  checked={notifications[item.key]}

                />

                <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-all duration-300 ${notifications[item.key] ? 'bg-primary' : 'bg-gray-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-all duration-300 ${notifications[item.key] ? 'translate-x-6' : ''}`} />
                </div>
              </label>
            )}
          </div>
        ))}
      </div>

      <div className='flex items-center justify-end gap-5 mt-5'>
        {isEditingNotifications ? (
          <>
            <button className='flex items-center gap-2 text-primary border-2 border-primary px-5 py-3 rounded-2xl cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300'
              onClick={handleCancelNotifications}
            >
              <X className='w-5 h-5' />
              Cancel
            </button>

            <button className='flex items-center gap-2 text-white bg-primary border-2 border-primary px-5 py-3 rounded-2xl hover:bg-blue-600 cursor-pointer'
              onClick={handleSaveNotifications}
            >
              <SaveIcon className='w-5 h-5' />
              Save Changes
            </button>
          </>
        ) : (
          <button className='flex items-center gap-2 text-white bg-primary border-2 border-primary px-5 py-3 rounded-2xl hover:bg-blue-600 cursor-pointer'
            onClick={handleUpdateNotifications}
          >
            <Edit className='w-5 h-5' />
            Update Notifications
          </button>
        )}
      </div>

    </div>
  );


  const renderSecurityTab = () => (
    <div>

    </div>
  )



  return (
    <div>
      <div>
        <h1 className='text-4xl font-bold mb-2'>Settings</h1>
        <p className='text-text-secondary'>Manage your account settings and preferences</p>
      </div>

      <div className='bg-white shadow my-8 p-2 rounded-2xl'>
        <div className='flex items-center gap-5'>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`flex items-center gap-2 py-3 px-4 rounded-2xl cursor-pointer ${activeTab === tab.id ? 'text-primary bg-blue-50' : 'text-text-secondary'}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon className='w-5 h-5' />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className='mt-7'>
        {activeTab === 'profile' && renderProfileTab()}
        {activeTab === 'notifications' && renderNotificationsTab()}
        {activeTab === 'security' && renderSecurityTab()}
      </div>
    </div>
  )
}

export default Settings
import { Bell, CreditCard, Edit, SaveIcon, Shield, UploadIcon, User, X } from 'lucide-react'
import React, { useRef, useState } from 'react'

const OwnerSettings = () => {

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'account', label: 'Account', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield }
  ]

  const [activeTab, setActiveTab] = useState('profile');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [profileData, setProfileData] = useState({
    companyName: 'TechStart Inc',
    contactPerson: 'John Williams',
    email: 'john@techstart.com',
    phone: '+1 (555) 987-6543',
    industry: 'Software Development',
    companySize: '50-200 employees',
    location: 'San Francisco, CA',
    bio: 'TechStart Inc is a leading software development company specializing in innovative solutions for startups and enterprises. We are committed to delivering high-quality projects on time.',
    interests: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'AI/ML', 'Cloud Solutions'],
    website: 'https://techstart.com',
    linkedin: 'https://linkedin.com/company/techstart',
    twitter: 'https://twitter.com/techstart'
  });

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [tempProfileData, setTempProfileData] = useState(profileData);
  const [tempProfilePhoto, setTempProfilePhoto] = useState(profilePhoto);

  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];

    if (file) {

      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB');
        return;
      }

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



  const renderProfileTab = () => {
    return (
      <div className='px-3'>
        <h2 className='text-2xl font-semibold mt-2'>Company Information</h2>

        <div className='flex items-center gap-8 my-8'>
          {isEditingProfile ? (
            tempProfilePhoto ? (
              <img className='w-24 h-24 flex items-center justify-center object-cover border-4 border-blue-100 rounded-full' src={tempProfilePhoto} alt="Profile" />
            ) : (
              <div className='w-24 h-24 bg-primary text-white text-3xl flex items-center justify-center rounded-full'>
                {tempProfileData.companyName.slice(0, 2).toUpperCase()}
              </div>
            )
          ) : (
            profilePhoto ? (
              <img className='w-24 h-24 flex items-center justify-center object-cover border-4 border-blue-100 rounded-full' src={profilePhoto} alt="Profile" />
            ) : (
              <div className='w-24 h-24 bg-primary text-white text-3xl flex items-center justify-center rounded-full'>
                {profileData.companyName.slice(0, 2).toUpperCase()}
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

        <hr className='border border-border' />

        <div className='grid grid-cols-2 gap-4 my-8'>
          <div className='w-full flex flex-col gap-3'>
            <label>Company Name</label>
            <input
              type="text"
              className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              value={isEditingProfile ? tempProfileData.companyName : profileData.companyName}
              onChange={(e) => setTempProfileData({ ...tempProfileData, companyName: e.target.value })}
              disabled={!isEditingProfile}
            />
          </div>

          <div className='w-full flex flex-col gap-3'>
            <label>Contact Person</label>
            <input
              type="text"
              className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              value={isEditingProfile ? tempProfileData.contactPerson : profileData.contactPerson}
              onChange={(e) => setTempProfileData({ ...tempProfileData, contactPerson: e.target.value })}
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
            <label>Industry</label>
            <input
              type='text'
              className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              value={isEditingProfile ? tempProfileData.industry : profileData.industry}
              onChange={(e) => setTempProfileData({ ...tempProfileData, industry: e.target.value })}
              disabled={!isEditingProfile}
            />
          </div>

          <div className='w-full flex flex-col gap-3'>
            <label>Company Size</label>
            <input
              type='text'
              className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              value={isEditingProfile ? tempProfileData.companySize : profileData.companySize}
              onChange={(e) => setTempProfileData({ ...tempProfileData, companySize: e.target.value })}
              disabled={!isEditingProfile}
            />
          </div>

          <div className='w-full flex flex-col gap-3'>
            <label>Location</label>
            <input
              type='text'
              className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              value={isEditingProfile ? tempProfileData.location : profileData.location}
              onChange={(e) => setTempProfileData({ ...tempProfileData, location: e.target.value })}
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

        <div className='mt-3'>
          <h2 className='text-2xl font-semibold mb-5'>Professional Links</h2>

          <div className='w-full flex flex-col gap-3 mb-3'>
            <label>Company Website</label>
            <input
              type="text"
              className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              value={isEditingProfile ? tempProfileData.website : profileData.website}
              onChange={(e) => setTempProfileData({ ...tempProfileData, website: e.target.value })}
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
            <label>Twitter Profile</label>
            <input
              type="text"
              className='w-full px-4 py-3 border text-text-secondary border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              value={isEditingProfile ? tempProfileData.twitter : profileData.twitter}
              onChange={(e) => setTempProfileData({ ...tempProfileData, twitter: e.target.value })}
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

      </div>
    )
  }

  const renderNotificationsTab = () => {

  }

  const renderSecurityTab = () => {

  }

  return (
    <div>
      <div>
        <h1 className='font-bold text-4xl'>Settings</h1>
        <p className='text-text-secondary mt-2'>Manage your account settings and preferences</p>
      </div>

      <div className='bg-white mt-8 p-2 rounded-2xl shadow-md'>
        <div className='flex items-center gap-3'>
          {tabs.map((tab) => {
            const Icon = tab.icon

            return (
              <div key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-3 px-4 rounded-2xl cursor-pointer ${activeTab === tab.id ? 'bg-blue-50 text-primary' : 'text-text-secondary'}`}
                >
                  <Icon className='w-5 h-5' />
                  {tab.label}
                </button>
              </div>
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

export default OwnerSettings